import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { DynamoDBClient as DynamodbClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, PutCommand } from "@aws-sdk/lib-dynamodb";
import { v4 as uuid } from "uuid";

const client = new DynamodbClient({
  region: "us-east-1",
  endpoint: "http://host.docker.internal:4566" // LocalStack
});

const docClient = DynamoDBDocumentClient.from(client);

type Clietn_request = {
    name: string;
    email: string;
    age: number;
}

type Client_server = {
    id: string;
    name: string;
    email: string;
    age: number;
}

export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
 
    const user = {
        id: uuid(),
        name: "string",
        email: "string",
        age: 0,
        location: "string",
        created_at: "TIMESTAMP",
        type: "user"
    }

    const tableName = "DynamoTable"
    const command = new PutCommand({
        TableName: tableName,
        Item: user,
    })

    const res = await docClient.send(command);

    return {
        statusCode: 200,
        body: JSON.stringify({ message: res })};
}