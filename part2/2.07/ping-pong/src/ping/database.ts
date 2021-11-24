export type PingCount = {
  count: number;
};

export const insertPingQuery = "INSERT INTO ping_requests VALUES ($1);";
export const countPingRequestQuery = "SELECT COUNT(*) FROM ping_requests;";
export const createPingRequestsTable = `
  CREATE TABLE IF NOT EXISTS ping_requests (
    user_agent VARCHAR(2000),
    ping_timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );`;
