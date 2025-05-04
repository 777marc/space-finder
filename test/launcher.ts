import { handler } from "../src/services/spaces/handler";

process.env.AWS_REGION = "us-east-1";
process.env.TABLE_NAME = "SpacesTable-0efb7b77b54b";

handler(
  {
    httpMethod: "DELETE",
    queryStringParameters: {
      id: "8e4991d4-ada6-4a80-9077-6eb7286fc995",
    },
    // body: JSON.stringify({
    //   location: "San Bernadino, CA",
    // }),
  } as any,
  {} as any
);
