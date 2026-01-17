import { Elysia } from "elysia";
import { node } from "@elysiajs/node";

import { cors } from "@elysiajs/cors";

const app = new Elysia({ adapter: node() })
  .use(cors())
  .get("/", () => ({ hello: "Node.js!!!!!!!👋" }))
  .get("/hello", () => ({ hello: "Hello World" }))
  .listen(3000);

console.log(`Listening on http://localhost:3000`);

export type AppType = typeof app 