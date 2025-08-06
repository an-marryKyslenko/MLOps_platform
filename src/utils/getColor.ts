export const getColor = (index: number) => {
	const colors = ['#1976d2', '#d32f2f', '#388e3c', '#fbc02d', '#7b1fa2'];
	return colors[index % colors.length];
};