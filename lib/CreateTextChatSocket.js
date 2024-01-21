import io from 'socket.io-client';

const url = "https://omglerrtest.azurewebsites.net/textUser"       // donot add / at the end of url

const socket = io(url,{auth: { token: 'omeglerr' }});
export default socket;