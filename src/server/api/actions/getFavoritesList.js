import { filter, propEq } from 'ramda'

import { TABLE_NAME, documentClient } from 'root/src/server/api/dynamoClient'
import { GSI1_INDEX_NAME, GSI1_PARTITION_KEY } from 'root/src/shared/constants/apiDynamoIndexes'

import { dynamoItemsProp } from 'root/src/server/api/lenses'
import listResults from 'root/src/server/api/actionUtil/listResults'
import favoritesSerializer from 'root/src/server/api/serializers/favoritesSerializer'

export default async ({ userId }) => {
    const userProjectIdParams = {
        TableName: TABLE_NAME,
        IndexName: GSI1_INDEX_NAME,
        KeyConditionExpression: `${GSI1_PARTITION_KEY} = :pk`,
        ExpressionAttributeValues: {
            ':pk': `favorites|${userId}`,
        },
    }

    const dynamoResults = await documentClient.query(
        userProjectIdParams,
    ).promise()

    // Filter `dynamoResults` with the value `favoritesAmount == 1`
    const favoritesProjects = filter(propEq('favoritesAmount', 1), dynamoItemsProp(dynamoResults))

    return listResults({
        dynamoResults: { Items: favoritesProjects },
        serializer: favoritesSerializer,
    })

}
