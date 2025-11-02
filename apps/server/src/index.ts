import express from "express";
import cors from "cors";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { appRoutes } from "./routes";
import { trpcContext } from "./utils/trpc";
import { PORT } from "./constants/env";
import serverless from "serverless-http";


const server = express();

server.use(express.json());
server.use(
  cors({
    origin: "https://trpc-react-template-web.vercel.app",
  }),
);

server.use(
  "/trpc",
  createExpressMiddleware({
    router: appRoutes,
    createContext: trpcContext,
  }),
);

server.get("/", (_, res) => {
  return res.json({
    info: "No Other routes found, TRPC Server Error.",
  });
});

export const handler = serverless(server);

if (process.env.NODE_ENV !== "production") {
  server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}
