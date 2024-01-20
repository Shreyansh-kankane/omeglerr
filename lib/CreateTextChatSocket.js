import io from 'socket.io-client';

const url = process.env.NEXT_PUBLIC_SERVER_TEXT_SOCKET_URL

const socket = io(url,{auth: { token: 'omeglerr' }});
export default socket;