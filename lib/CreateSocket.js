import io from 'socket.io-client';

const url = "https://omeglerr.azurewebsites.net/"
// const url = "https://omegler-socket-server.onrender.com/"

const socket = io(url,{auth: { token: 'omeglerr' }});
export default socket;