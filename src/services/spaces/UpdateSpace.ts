import { DynamoDBClient, UpdateItemCommand } from "@aws-sdk/client-dynamodb";
import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";

export async function updateSpace(
  event: APIGatewayProxyEvent,
  ddbClient: DynamoDBClient
): Promise<APIGatewayProxyResult> {
  if (
    event.queryStringParameters &&
    "id" in event.queryStringParameters &&
    event.body
  ) {
    if ("id" in event.queryStringParameters) {
      const spaceId = event.queryStringParameters["id"];
      const parsedBody = JSON.parse(event.body);
      const requestBodyKey = Object.keys(parsedBody)[0];
      const requestBodyValue = parsedBody[requestBodyKey];

      const updateResult = await ddbClient.send(
        new UpdateItemCommand({
          TableName: process.env.TABLE_NAME,
          Key: {
            id: { S: spaceId },
          },
          UpdateExpression: "set #zzznew = :new",
          ExpressionAttributeValues: {
            ":new": {
              S: requestBodyValue,
            },
          },
          ExpressionAttributeNames: {
            "#zzznew": requestBodyKey,
          },
          ReturnValues: "UPDATED_NEW",
        })
      );

      return {
        statusCode: 204,
        body: JSON.stringify(
          `update successful: ${JSON.stringify(updateResult.Attributes)}`
        ),
      };
    }

    return {
      statusCode: 400,
      body: JSON.stringify("invalid request"),
    };
  }
}
