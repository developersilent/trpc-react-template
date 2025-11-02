import { initTRPC } from "@trpc/server";
import type { CreateExpressContextOptions } from "@trpc/server/adapters/express";
import superjson from "superjson";

// create the express context;
export async function trpcContext({ req, res }: CreateExpressContextOptions) {
  return { req, res };
}

// Context type
type ContextType = Awaited<typeof trpcContext>;

// init the TRPC with context
const init = initTRPC.context<ContextType>().create({
  transformer: superjson,
});

// export main function
export const createTRPCRoute = init.router;
export const publicProcedure = init.procedure;
