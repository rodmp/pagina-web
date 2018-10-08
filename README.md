- [Cognito login guide](https://aws.amazon.com/blogs/developer/authentication-in-the-browser-with-amazon-cognito-and-public-identity-providers/)

- [Cognito login credential config](https://aws.amazon.com/blogs/developer/authentication-in-the-browser-with-amazon-cognito-and-public-identity-providers/)

- [Cloudformation template reference](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html)




ALL > list projects by active status sorted by created date 
ALL > list projects by funded status sorted by created date
ADMIN > list projects to approve by status
	(gsi project: {
		rkey: project.status skey: project.created
	})

CREATOR > list projects by assignment to creators I've claimed
	(rkey: outletClaims > (gsi deliverable: {rkey: outletId}) > rkey:project )

PROJECT CREATOR >  list projects created by own user id
	(gsi project: { rkey: userId })

PLEDGER > list pledged projects by own user id
PLEDGER > list media from pledged projects
	(rkey: pledge.userId > project.id)
