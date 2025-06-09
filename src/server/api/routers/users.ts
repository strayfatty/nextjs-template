import { asc, count, eq } from "drizzle-orm";
import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";
import { users } from "~/server/db/schema";

export const usersRouter = createTRPCRouter({
  count: protectedProcedure.query(async ({ ctx }) => {
    const result = await ctx.db.select({ count: count() }).from(users);
    return result[0]?.count ?? 0;
  }),
  list: protectedProcedure
    .input(
      z.object({
        offset: z.number().min(0).default(0),
        limit: z.number().min(1).max(100).default(10),
      }),
    )
    .query(async ({ ctx, input }) => {
      return await ctx.db
        .select()
        .from(users)
        .orderBy(asc(users.name))
        .limit(input.limit)
        .offset(input.offset);
    }),
  byId: protectedProcedure.input(z.string()).query(async ({ ctx, input }) => {
    const result = await ctx.db
      .select()
      .from(users)
      .where(eq(users.id, input))
      .limit(1);

    return result[0] ?? null;
  }),
});
