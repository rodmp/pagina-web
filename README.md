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
export const apiDynamoTableName = 'arn:aws:dynamodb:us-east-1:685756249129:table/dareMeDev-dareMeDevApiDynamoDbTable-5OTTQPZG5KJV'
export const clientId = 'op56iho98u8sf5bmqphtv1q76'
export const apiFunctionArn = 'arn:aws:lambda:us-east-1:685756249129:function:dareMeDev-dareMeDevApiLambdaFunction-167B8YFBDGEYN'
export const domainName = 'dev.watt.tv'
export const userPoolId = 'us-east-1_S8cDjcbXm'
export const identityPoolId = 'us-east-1:b1c7e233-bade-47b8-b877-1573ff41e063'
```

`yarn start`

Site should be available at:

[http://localhost:8585](http://localhost:8585)

#
## Server

#
## Contributing

- Create a feature branch from master

- Make a pull request to master