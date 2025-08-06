import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import React from 'react'

const Header = ({children}: {children: React.ReactNode}) => {
	return (
		<AppBar 
			position='static' 
			sx={{
				py: 2,
				zIndex: (theme) => theme.zIndex.drawer + 1
			}}>
				<Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
					<Typography variant='h6' >
						MLOps Platform
					</Typography>
					{children}
				</Toolbar>
		</AppBar>
	)
}

export default Header