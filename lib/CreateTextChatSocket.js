import io from 'socket.io-client';

const url = "https://omglerrtest.azurewebsites.net/textUser/"

const socket = io(url,{auth: { token: 'omeglerr' }});
export default socket;