import Echo from 'laravel-echo';
import Pusher from 'pusher-js';

window.Pusher = Pusher;

const echo = new Echo({
	broadcaster: 'pusher',
	key: import.meta.env.VITE_PUSHER_KEY,
	cluster: import.meta.env.VITE_PUSHER_CLUSTER,
	wsPort: 80,
	wssPort: 443,
	forceTLS: true,
	enabledTransports: ['ws', 'wss'],
});

export default echo;
