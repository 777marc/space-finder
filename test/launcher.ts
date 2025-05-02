import { handler } from "../src/services/spaces/handler";

process.env.AWS_REGION = "us-east-1";
process.env.TABLE_NAME = "SpacesTable-0efb7b77b54b";

handler(
  {
    httpMethod: "POST",
    // queryStringParameters: {
    //   id: "0d889c5c-6156-40f8-b101-e2d1a7f1abb5",
    // },
    body: JSON.stringify({
      location: "san francisco, ca",
    }),
  } as any,
  {} as any
);
