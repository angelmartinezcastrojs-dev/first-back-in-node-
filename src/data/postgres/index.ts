import { PrismaClient } from '../../generated/client';
import { Pool } from 'pg'
import { PrismaPg } from '@prisma/adapter-pg';

const pool = new Pool({
  // CAMBIO CLAVE: Asegúrate de que Railway tenga esta variable
  connectionString: process.env.DATABASE_URL 
})

const adapter = new PrismaPg(pool)

// Aquí TypeScript no se quejará porque le estás pasando el adapter
export const prisma = new PrismaClient({ adapter });