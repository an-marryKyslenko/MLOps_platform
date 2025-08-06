import React from 'react'
import { Line } from 'react-chartjs-2'

type Props = {
	experimentId: string, 
	metricId: string, 
	data: []
}
const options = {
	responsive: true,
	interaction: {
		mode: 'index' as const,
		intersect: false,
	},
	stacked: false,
	plugins: {
		title: {
			display: true,
			text: 'Chart.js Line Chart - Multi Axis',
		},
	},
	scales: {
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
const ExperimentLine = ({experimentId}: Props) => {
	const data = {
		labels,
		datasets: [
			{
				label: 'Dataset 1',
				data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
				borderColor: 'rgb(255, 99, 132)',
				backgroundColor: 'rgba(255, 99, 132, 0.5)',
				yAxisID: 'y',
			},
			{
				label: 'Dataset 2',
				data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
				borderColor: 'rgb(53, 162, 235)',
				backgroundColor: 'rgba(53, 162, 235, 0.5)',
				yAxisID: 'y1',
			},
		],
		};
	return (
		<Line data={chartData} options={options} />
	)
}

export default ExperimentLine