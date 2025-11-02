import type { appRoutes } from "../routes";

// Shared AppRoutes type for client
export type AppRoutes = Awaited<typeof appRoutes>
