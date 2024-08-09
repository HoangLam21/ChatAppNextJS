import { Server } from 'socket.io';

declare module 'http' {
  export interface IncomingMessage {
    socket: {
      server: {
        io?: Server;
      };
    };
  }
}
