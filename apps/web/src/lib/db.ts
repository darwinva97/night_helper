import { PrismaClient } from "@repo/db"

const datasourceUrl = import.meta.env.VITE_DATABASE_URL || process.env.DATABASE_URL;

console.log(datasourceUrl, "datasourceUrl");

const prisma = new PrismaClient({
    datasourceUrl,
})

export default prisma
