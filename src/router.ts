import { FastifyInstance } from "fastify";
import userController from "./controller/userController";
import indexController from "./controller/indexController";
import webSocketController from "./controller/webSocketController";

export default async function router(fastify: FastifyInstance) {
  fastify.register(userController, { prefix: "/api/v1/user" });
  fastify.register(indexController, { prefix: "/" });

  fastify.register(require('@fastify/websocket'))
  fastify.register(webSocketController, { prefix: "/ws"});
}
