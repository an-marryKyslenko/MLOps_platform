export const options = {
	responsive: true,
	maintainAspectRatio: false,
	interaction: {
		mode: 'index' as const,
		intersect: false,
	},
	stacked: false,
	spanGaps: true,
	datasets: {
		line: {
				pointRadius: 0,
		},
		elements: {
			point: {
					radius: 0,
			}
		}
	},
	plugins: {
		title: {
			display: false,
			text: 'Chart.js Line Chart',
		},
	},
	scales: {
		x: {
			type: 'linear' as const,
			min: undefined,
			max: undefined
		},
		y: {
			type: 'linear' as const,
			display: true,
			position: 'left' as const,
		},
		y1: {
			type: 'linear' as const,
			display: true,
			position: 'right' as const,
			grid: {
			drawOnChartArea: false,
			},
		},
	},
};