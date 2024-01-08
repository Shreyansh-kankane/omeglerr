import io from 'socket.io-client';

const url = process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_SERVER_URL : 'http://localhost:5000';

const socket = io(url,{auth: { token: 'omeglerr' }});
export default socket;