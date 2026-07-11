import 'dotenv/config';
import { DataSource } from 'typeorm';
import { databaseConfig } from './src/config/database.config';

console.log('Creating datasource...');

const AppDataSource = new DataSource(databaseConfig);

export default AppDataSource;
