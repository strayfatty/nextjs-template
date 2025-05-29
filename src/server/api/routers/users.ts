import { asc, eq } from "drizzle-orm";
import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";
import { users } from "~/server/db/schema";

export const usersRouter = createTRPCRouter({
  list: protectedProcedure.query(async ({ ctx }) => {
    return await ctx.db.select().from(users).orderBy(asc(users.name));
  }),
  byId: protectedProcedure.input(z.string()).query(async ({ ctx, input }) => {
    const result = await ctx.db
      .select()
      .from(users)
      .where(eq(users.id, input))
      .limit(1);

    return result[0];
  }),
});
