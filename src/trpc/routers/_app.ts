import { baseProcedure, createTRPCRouter } from '../init';
import prisma from '@/lib/db';
export const appRouter = createTRPCRouter({
  helgetUserslo: baseProcedure
    .query((opts) => {
      return prisma.users.findMany()
    }),
});
// export type definition of API
export type AppRouter = typeof appRouter;