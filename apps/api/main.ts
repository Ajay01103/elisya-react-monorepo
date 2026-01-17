import { Elysia } from "elysia";
import { node } from "@elysiajs/node";
import { openapi } from "@elysiajs/openapi";

import { cors } from "@elysiajs/cors";

const app = new Elysia({ adapter: node() })
  .use(cors())
  .use(openapi())
  .get("/", () => ({ hello: "Node.js!!!!!!!👋" }))
  .get("/hello", () => ({ hello: "Hello World" }))
  .listen(3000);

console.log(`Listening on http://localhost:3000`);

export type AppType = typeof app;
