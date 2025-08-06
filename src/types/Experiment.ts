export type Experiment = {
	experiment_id: string, 
	metric_name: string, 
	step: number, 
	value: number
}

export type ChartDataPoint = {
	step: number;
	[experiment_id: string]: number;
};

export type ExperimentChartData = {
	metricName: string;
	data: ChartDataPoint[];
};