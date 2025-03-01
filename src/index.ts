import { Hono } from "hono";
import { logger } from "hono/logger";
import v1Routes from "./adapters/routes/v1/v1.routes.ts";

export const app = new Hono();

app.use(logger())
app.route("/api/v1", v1Routes);

Deno.serve({ port: +Deno.env.get("PORT")! }, app.fetch);
