import io from 'socket.io-client';

const url = "https://omeglerr.azurewebsites.net/textUser"
// const url = "https://omegler-socket-server.onrender.com/textUser"

const socket = io(url,{auth: { token: 'omeglerr' }});
export default socket;