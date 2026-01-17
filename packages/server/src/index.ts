import { treaty } from "@elysiajs/eden";
import type { AppType } from "api/main";

export const api = treaty<AppType>("localhost:3000");

export type { AppType };
