import { FastifyInstance, FastifyRequest } from "fastify";
import {SocketStream} from "@fastify/websocket";

export default async function webSocketController(fastify: FastifyInstance) {
  // GET /ws/
  fastify.get("/echo", { websocket: true }, async function (
    connection: SocketStream,
    _request: FastifyRequest,
  ): Promise<void> {
    connection.socket.on('message', message => {
      connection.socket.send('Echo from server: ' + message.toString())
    });
  });
}
