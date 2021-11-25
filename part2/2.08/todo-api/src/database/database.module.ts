import { Module, Provider } from "@nestjs/common";
import { Pool } from "pg";

const postgresProvider: Provider = {
  provide: "postgres",
  useValue: new Pool({
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  }),
};

@Module({
  imports: [],
  providers: [postgresProvider],
  exports: [postgresProvider],
})
export class DatabaseModule {}
