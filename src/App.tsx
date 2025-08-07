import { useEffect, useState } from 'react'
import './App.css'
import type { Experiment } from './types/Experiment';
import { Box, Button, LinearProgress, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import Header from './components/Header/Header';
import UploadCSV from './components/UploadCSV/UploadCSV';
import ChartViewer from './components/ChartViewer/ChartViewer';
import MetricsControl from './components/MetricsControl/MetricsControl';
import DrawerBox from './components/Drawer/DrawerBox';
import DrawerContent from './components/Drawer/DrawerContent';

function App() {
  const [rowData, setRowData] = useState<Experiment[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedExperiments, setSelectedExperiments] = useState<string[]>([]);
	const experementsList = Array.from(new Set(rowData.map(row => row.experiment_id).filter(r => r)))
	const metricsList = Array.from(new Set(rowData.map(row => row.metric_name).filter(r => r)))
  const [selectedMetric, setSelectedMetric] = useState<string | null>(null);
	const [mobileOpen, setMobileOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    if(loading && rowData.length > 0) {
      setSelectedExperiments([experementsList[0]])
      setSelectedMetric(metricsList[0])
    }
  }, [loading])

  console.log(rowData.length)
  const handleClearFilter = () => {
    setSelectedExperiments([]);
  }

  const handleUploadingData = (data: Experiment[]) => {
    setLoading(true);
    setRowData(data);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
    
  }

  const handleSelectExp = (list: string[]) => {
    setMobileOpen(false)
    setSelectedExperiments(list)
  }
  
  const hanldeSelectMetric = (metric: string) => {
    setSelectedMetric(metric)
  }

  const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

  return (
    <Stack sx={{minHeight: '100vh'}}>
      <Header>
          <UploadCSV onDataParsed={handleUploadingData}/>
      </Header>

      <Stack 
        spacing={2} 
        direction="row" 
        component="main" 
        sx={{
          flex: "1 1 100%",
          p: 2
        }}
      >
        {loading && (
          <Box sx={{ width: '100%' }}>
            <LinearProgress />
          </Box>
        )}

        {!loading && selectedMetric && (
          <>
            <DrawerBox
              open={mobileOpen}
              onClose={() => setMobileOpen(false)}
            >
              <DrawerContent 
                selectedExps={selectedExperiments} 
                onSelect={handleSelectExp} 
                list={experementsList} 
                onClear={handleClearFilter}/>
            </DrawerBox>
            
            <Box component="section" sx={{ flex: 1, width: '100%', height: 500 }}>
              {isMobile && (
                <Button
                  fullWidth
                  variant='outlined'
                  onClick={handleDrawerToggle}
                  sx={{ mb: 2 }}
                >
                  Choose Experiments
                </Button>
              )}
              <MetricsControl metricsList={metricsList} selectedMetric={selectedMetric} onSelect={hanldeSelectMetric}/>
              <ChartViewer rowData={rowData} selectedMatric={selectedMetric} experimentsId={selectedExperiments}/>
            </Box>
          </>
          )}
          {!selectedMetric &&  (<Typography variant='h4'>Need upload the CSV file</Typography>)
          }
      </Stack>
    </Stack>
  )
}

export default App
