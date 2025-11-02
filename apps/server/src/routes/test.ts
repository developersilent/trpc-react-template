import { createTRPCRoute, publicProcedure } from "../utils/trpc";

// test route
export const testRoute = createTRPCRoute({
  sayHi: publicProcedure.query(() => {
    return {
      msg: "TRPC Server Response !!",
    };
  }),
});
