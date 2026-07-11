import { DataSourceOptions } from 'typeorm';

export const databaseConfig: DataSourceOptions = {
  type: 'postgres',

  host: process.env.DB_HOST,

  port: Number(process.env.DB_PORT || 5432),

  username: process.env.DB_USERNAME,

  password: process.env.DB_PASSWORD,

  database: process.env.DB_DATABASE,

  entities: ['src/**/*.entity.ts'],
  migrations: ['src/database/*.ts'],

  synchronize: false,

  logging: false,
};
