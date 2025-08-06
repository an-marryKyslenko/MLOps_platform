import { Button, Checkbox, FormControlLabel, Stack, Typography } from '@mui/material'

type Props = {
	list: string[],
	selectedExps: string[];
	onSelect: (selected: string[]) => void
	onClear: () => void
}

const DrawerContent = ({list, selectedExps, onSelect, onClear}: Props) => {
	const handleChackbox = (e: React.ChangeEvent<HTMLInputElement>) => {
		const isChecked = e.target.checked;
		const exp = e.target.name;

		const updated = isChecked
			? [...selectedExps, exp]
			: selectedExps.filter(id => id !== exp);
		onSelect(updated);
	}
	return (
		<Stack>
			<Typography variant="h6" gutterBottom>Experements</Typography>

			{list.map(exp => (
				<FormControlLabel 
					key={exp} 
					control={<Checkbox onChange={handleChackbox} checked={selectedExps.includes(exp)}/>} 
					name={exp}
					label={exp} 
				/>
			))}

			<Button variant="contained" sx={{ mt: 2 }} onClick={onClear}>Clear</Button>
		</Stack>
	)
}

export default DrawerContent;