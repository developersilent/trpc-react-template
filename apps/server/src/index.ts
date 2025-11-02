import express from "express";
import cors from "cors";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { appRoutes } from "./routes";
import { trpcContext } from "./utils/trpc";
import { PORT } from "./constants/env";

const server = express();

server.use(express.json());
server.use(
  cors({
    origin: "*",
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

server.listen(PORT, () => {
  console.log("Server is running ...", PORT);
});
