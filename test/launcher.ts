import { handler } from "../src/services/spaces/handler";

process.env.AWS_REGION = "us-east-1";
process.env.TABLE_NAME = "SpacesTable-0efb7b77b54b";

handler(
  {
    httpMethod: "POST",
    body: JSON.stringify({
      location: "san diego, ca",
    }),
  } as any,
  {} as any
);
