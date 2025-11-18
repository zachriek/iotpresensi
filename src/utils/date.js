export const formatDate = (date) => {
	if (!date) return '-';
	const d = new Date(date);
	return d.toLocaleString('id-ID', {
		day: '2-digit',
		month: 'long',
		year: 'numeric',
		hour: '2-digit',
		minute: '2-digit',
	});
};

export const formatTime = (timeString) => {
	if (!timeString) return '-';
	if (typeof timeString === 'string' && timeString.includes(':')) {
		return timeString.slice(0, 5);
	}
	return '-';
};
