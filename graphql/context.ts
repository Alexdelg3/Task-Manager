import { Prisma, PrismaClient } from "@prisma/client";
import prisma from "../lib/prisma";

export type Context = {//Creating a Context type with prisma as a field
    prisma: PrismaClient
}

export async function createContext ({ req, res }) : Promise<Context> {
    return {
        prisma,
    }
}