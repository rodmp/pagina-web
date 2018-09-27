import { propOr, prop, concat } from 'ramda'

const getAllResources = (
    cloudFormationClient, stackName, nextToken, lastResources = [],
) => cloudFormationClient.listStackResources({
    StackName: stackName, NextToken: nextToken,
}).promise().then((res) => {
    const resources = propOr([], 'StackResourceSummaries', res)
    const hasNextToken = prop('NextToken', res)
    if (hasNextToken) {
        return getAllResources(
            cloudFormationClient, stackName, hasNextToken,
            resources,
        )
    }
    return concat(lastResources, resources)
})

export default getAllResources