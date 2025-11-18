import Pusher from 'pusher-js';

const pusher = new Pusher('01918206384bf00c0ff8', {
	cluster: 'ap1',
});

export default pusher;
