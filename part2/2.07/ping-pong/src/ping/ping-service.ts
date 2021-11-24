import { Client, ClientConfig } from "pg";
import {
  countPingRequestQuery,
  createPingRequestsTable,
  insertPingQuery,
  PingCount,
} from "./database";

const config: ClientConfig = {
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || "5432"),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
};

let client: Client;

export const initDatabase = async () => {
  console.log(
    `Connecting to database ${config.host}:${config.port} as user ${config.user}.`
  );
  try {
    await initConnection();
    console.log("Connected!");
    await initTable();
  } catch (error) {
    console.error(error);
  }
};

export const initConnection = async () => {
  client = new Client(config);
  await client.connect();
};

export const initTable = async () => {
  await client.query(createPingRequestsTable);
};

export const getPingCount = async (): Promise<number> => {
  const result = await client.query<PingCount>(countPingRequestQuery);
  const pingCount = result.rows.length > 0 ? result.rows[0].count : 0;
  return pingCount;
};

export const savePing = async (userAgent: string): Promise<void> => {
  const values = [userAgent];
  await client.query(insertPingQuery, values);
};
