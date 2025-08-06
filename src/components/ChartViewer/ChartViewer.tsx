import React from 'react';
import {
	Chart as ChartJS,
	LineElement,
	PointElement,
	LinearScale,
	CategoryScale,
	Tooltip,
	Legend,
	Title,
	Colors
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import type { Experiment} from '../../types/Experiment';
import { buildChartDataPerMatric } from '../../utils/buildChartData';
import { getColor } from '../../utils/getColor';
import { options } from '../../utils/chartOption';

ChartJS.register(
	LineElement, 
	PointElement, 
	LinearScale, 
	CategoryScale, 
	Tooltip, 
	Legend, 
	Title,
	Colors
);

type Props = {
	rowData: Experiment[];
		experimentsId: string[];
	selectedMatric: string;
};

const ExperimentChart: React.FC<Props> = ({ experimentsId,selectedMatric, rowData}) => {
	const experimentCharts = buildChartDataPerMatric(rowData, selectedMatric);
	
	if (experimentCharts.data.length === 0) return <p>No data</p> ;

	const datasets = experimentsId.map((expId, index) => ({
		label: expId,
		data: experimentCharts.data.map(point => ({
      x: point.step,
      y: point[expId] ?? null,
		})),
		spanGaps: true,
		pointRadius: 0,
		borderColor: getColor(index),
		backgroundColor: getColor(index),
		tension: 0.3,
	}));

	const dataL = {
		type: 'line',
		labels: [0, 5000, 10000, 15000, 20000, 25000],
		datasets,
	};

	return <Line data={dataL} options={options} />;
};

export default ExperimentChart;
