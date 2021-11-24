export type PingCount = {
  count: number;
};

export const countPingRequestQuery = "SELECT COUNT(*) FROM ping_requests;";
