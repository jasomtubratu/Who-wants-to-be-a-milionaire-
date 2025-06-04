import { io } from 'socket.io-client';

let socket: any;

export const initSocket = () => {
  if (!socket) {
    socket = io(process.env.NEXT_PUBLIC_SOCKET_URL || 'http://localhost:3000', {
      path: '/api/socket',
    });
  }
  return socket;
};

export const getSocket = () => {
  return socket;
};