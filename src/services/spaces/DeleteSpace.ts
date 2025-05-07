import { DeleteItemCommand, DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { hasAdminGroup } from "../../infra/Utils";

export async function deleteSpace(
  event: APIGatewayProxyEvent,
  ddbClient: DynamoDBClient
): Promise<APIGatewayProxyResult> {
  if (!hasAdminGroup(event)) {
    return {
      statusCode: 401,
      body: JSON.stringify("Not Authorized to delete."),
    };
  }

  if (event.queryStringParameters && "id" in event.queryStringParameters) {
    if ("id" in event.queryStringParameters) {
      const spaceId = event.queryStringParameters["id"];

      const deleteResult = await ddbClient.send(
        new DeleteItemCommand({
          TableName: process.env.TABLE_NAME,
          Key: {
            id: { S: spaceId },
          },
        })
      );

      console.log(deleteResult);

      return {
        statusCode: 200,
        body: JSON.stringify(`delete successful, id: ${spaceId}`),
      };
    }

    return {
      statusCode: 400,
      body: JSON.stringify("invalid request"),
    };
  }
}
