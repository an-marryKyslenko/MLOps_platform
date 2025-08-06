import type { ChartDataPoint, Experiment, ExperimentChartData } from "../types/Experiment";

export const buildChartDataPerMatric = (rows: Experiment[], metricName: string) => {
	const result: ExperimentChartData = {
		metricName,
		data: []
	};

		const filtered = rows.filter(r => r.metric_name === metricName);

		const stepMap: Record<number, ChartDataPoint> = {};

		filtered.forEach(({ step, experiment_id, value }) => {
			if (!stepMap[step]) {
			stepMap[step] = { step };
			}
			stepMap[step][experiment_id] = value;
		});

		const data = Object.values(stepMap).sort((a, b) => a.step - b.step);

		result.data.push(...data)

	return result;
};