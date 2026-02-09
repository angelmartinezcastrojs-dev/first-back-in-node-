import { PrismaClient } from '../../generated/client';
import { Pool } from 'pg'
import { PrismaPg } from '@prisma/adapter-pg';


const pool = new Pool({
  connectionString: process.env.POSTGRES_URL
})

const adapter = new PrismaPg(pool)


export const prisma = new PrismaClient({ adapter });
