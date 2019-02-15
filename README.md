- [Cognito login guide](https://aws.amazon.com/blogs/developer/authentication-in-the-browser-with-amazon-cognito-and-public-identity-providers/)

- [Cognito login credential config](https://aws.amazon.com/blogs/developer/authentication-in-the-browser-with-amazon-cognito-and-public-identity-providers/)

- [Cloudformation template reference](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html)

- [Authorize cognito jwtToken example](https://stackoverflow.com/a/42405528/1692715)

- [AWS Glue](https://aws.amazon.com/blogs/database/simplify-amazon-dynamodb-data-extraction-and-analysis-by-using-aws-glue-and-amazon-athena/)


ADMIN > list projects to approve by 'audit' status
ADMIN > approve project
ADMIN > reject project

CREATOR > list projects by assignment to outlets I've claimed

PROJECT CREATOR > list projects created by own user id

PLEDGER > list all active projects 
PLEDGER > list pledged projects by own user id
PLEDGER > list media from completed pledged projects
PLEDGER > pledge project

PLEDGER / PROJECT CREATOR > list credit cards 


# Local setup


## Client

Install node and yarn

`yarn install`


Add a file with the contents below called `cfOutput.js` to the root directory
```
export const apiDynamoTableName = 'arn:aws:dynamodb:us-east-1:439348682344:table/slsAwsDev-slsAwsDevApiDynamoDbTable-1G9ZZQFLUKW01'
export const clientId = '7288ckgtjig4gr4pbvfuuioest'
export const apiFunctionArn = 'arn:aws:lambda:us-east-1:439348682344:function:slsAwsDev-slsAwsDevApiLambdaFunction-1KH0LVBSKGJK8'
export const domainName = 'dev.5gorillaz.com'
export const userPoolId = 'us-east-1_aUua2XNQk'
export const identityPoolId = 'us-east-1:01a34d10-f3eb-403d-9360-3fad8c1969c5'
```

`yarn start`

Site should be available at:

[http://localhost:8585](http://localhost:8585)

#
## Server