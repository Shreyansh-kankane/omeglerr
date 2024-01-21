import io from 'socket.io-client';

const url = "https://omglerrtest.azurewebsites.net/"

const socket = io(url,{auth: { token: 'omeglerr ' }});  // donot remove space after omeglerr
export default socket;