import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup} from '@mui/material';

type Props = {
	selectedMetric: string;
	metricsList: string[];
	onSelect: (metric: string) => void;
}
const MetricsControl = ({selectedMetric,metricsList, onSelect}: Props) => {
	return (
		<FormControl sx={{textAlign: 'center', width: '100%'}}>
			<FormLabel id="controlled-radio-buttons-group">Metrics</FormLabel>
			<RadioGroup
			aria-labelledby="controlled-radio-buttons-group"
			name="controlled-radio-buttons-group"
			value={selectedMetric}
			onChange={(e) => onSelect(e.target.value)}
			sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}
			>
			{metricsList.map((m) => (
				<FormControlLabel key={m} value={m} control={<Radio />} label={m} />
			))}
			</RadioGroup>
		</FormControl>
	)
}

export default MetricsControl