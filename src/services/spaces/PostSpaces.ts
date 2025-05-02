import { DynamoDBClient, PutItemCommand } from "@aws-sdk/client-dynamodb";
import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Context,
} from "aws-lambda";
import { v4 } from "uuid";

export async function postSpaces(
  event: APIGatewayProxyEvent,
  context: Context,
  ddbClient: DynamoDBClient
): Promise<APIGatewayProxyResult> {
  const randomId = v4();
  const item = JSON.parse(event.body);
  item.id = randomId;

  const results = await ddbClient.send(
    new PutItemCommand({
      TableName: process.env.TABLE_NAME,
      Item: {
        id: {
          S: randomId,
        },
        location: {
          S: item.location,
        },
      },
    })
  );

  console.log(results);

  const response: APIGatewayProxyResult = {
    statusCode: 200,
    body: JSON.stringify({ id: randomId }),
  };

  return response;
}
