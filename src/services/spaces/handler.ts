import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Context,
} from "aws-lambda";

async function handler(
  event: APIGatewayProxyEvent,
  context: Context
): Promise<APIGatewayProxyResult> {
  let message: string;

  switch (event.httpMethod) {
    case "GET":
      message = "hello from get request";
      break;
    case "POST":
      message = "hello from post request";
      break;
    default:
      break;
  }

  const response: APIGatewayProxyResult = {
    statusCode: 200,
    body: message,
  };
  console.log(event);
  return response;
}

export { handler };
