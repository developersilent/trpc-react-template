import { createTRPCRoute } from "../utils/trpc";
import { testRoute } from "./test";

// All trpc routes connect here
export const appRoutes = createTRPCRoute({
  test: testRoute,
});
