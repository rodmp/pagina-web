import webpack from 'webpack'
import { find, propEq, prop } from 'ramda'

import { STATIC_BUCKET } from 'sls-aws/src/aws/staticHosting/resourceIds'
import listAllStackResources from 'sls-aws/src/aws/util/cfCli/listAllStackResources'
import webConfig from 'sls-aws/webpack.config.js'

export const buildStatics = () => new Promise((resolve, reject) => (
    webpack(
        webConfig,
        (err, stats) => {
            if (err || stats.hasErrors()) {
                reject(err)
            }
            resolve()
        },
    )
))

export const getHostingBucket = (
    cloudFormationClient, stackName,
) => (
    listAllStackResources(cloudFormationClient, stackName).then((res) => (
        prop(
            'PhysicalResourceId',
            find(propEq('LogicalResourceId', STATIC_BUCKET), res)
        )
    ))
)

export const uploadStatics = (
    s3UploadClient, projectRoot, bucket,
) => new Promise(
    (resolve, reject) => {
        const uploader = s3UploadClient.uploadDir({
            localDir: `${projectRoot}/dist/build-web-client`,
            deleteRemoved: true,
            s3Params: {
                Bucket: bucket,
            },
        })
        uploader.on('error', (err) => {
            reject(err)
        })
        uploader.on('end', () => {
            resolve()
        })
    }
)

export default ({
    cloudFormationClient, stackName, projectRoot, s3UploadClient,
}) => buildStatics().then(
    () => getHostingBucket(cloudFormationClient, stackName).then(
        (hostingBucket) => uploadStatics(
            s3UploadClient, projectRoot, hostingBucket,
        )
    )
)