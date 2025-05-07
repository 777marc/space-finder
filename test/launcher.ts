import { handler } from "../src/services/spaces/handler";

process.env.AWS_REGION = "us-east-1";
process.env.TABLE_NAME = "SpacesTable-0efb7b77b54b";

handler(
  {
    httpMethod: "DELETE",
    queryStringParameters: {
      id: "1e61fef3-3a50-4398-9692-674dcfb0c5b7",
    },
    // body: JSON.stringify({
    //   location: "Jacksonville, FL",
    //   name: "default location",
    // }),
  } as any,
  {} as any
);
