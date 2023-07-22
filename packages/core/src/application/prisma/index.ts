import { Prisma, PrismaClient } from '@prisma/client';
import { memoize } from 'lodash';

const prismaClient = memoize(
  async (options?: Prisma.PrismaClientOptions): Promise<PrismaClient> => {
    return new PrismaClient(options);
  },
);

export const prisma = await prismaClient();
