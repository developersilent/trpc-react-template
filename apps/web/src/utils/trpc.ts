import {createTRPCReact} from "@trpc/react-query";
import type {AppRoutes} from "../../../server/src/shared/types.ts";

export const trpcClient = createTRPCReact<AppRoutes>();
