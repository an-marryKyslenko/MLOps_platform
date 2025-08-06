import { useState } from 'react';
import { Button, Stack, Typography } from '@mui/material';
import Papa from 'papaparse';
import type { Experiment } from '../../types/Experiment';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

type Props = {
	onDataParsed: (data: Experiment[]) => void
}
const UploadCSV = ({ onDataParsed }: Props) => {
	const [fileName, setFileName] = useState('');

	const handleFileChange = (e: React.FormEvent<HTMLInputElement>) => {
		const fileList = e.currentTarget.files;
		
		if(fileList && fileList?.length > 0 ) {
			Papa.parse<Experiment>(fileList[0], {
			header: true,
			dynamicTyping: true,
			complete: (results) => {
				onDataParsed(results.data)
				setFileName(fileList[0].name)
			},
			});
	
		}
	};

	return (
		<Stack direction="row-reverse" spacing={2} sx={{alignItems: 'center'}}>
			<Button variant="outlined" component="label" 
				sx={{
					bgcolor: 'white', 
				}}
				startIcon={<FileDownloadIcon/>}
			>
				CSV
				<input type="file" accept=".csv" hidden onChange={handleFileChange} />
			</Button>
			{fileName && <Typography sx={{ display: {xs: 'none', md: 'inline-block'}}}>Файл: {fileName}</Typography>}
		</Stack>
	);
};

export default UploadCSV;
