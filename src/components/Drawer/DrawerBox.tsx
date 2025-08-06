import { Drawer, useMediaQuery, useTheme } from '@mui/material'
import { type ReactNode } from 'react';

type Props = {
	open: boolean;
	onClose: () => void
	children: ReactNode
}
const DrawerBox = ({open, onClose, children}: Props) => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('md'));


	if(isMobile) {
		return (
			<Drawer
				variant="temporary"
				open={open}
				onClose={onClose}
				ModalProps={{
				keepMounted: true,
				}}
				sx={{
				[`& .MuiDrawer-paper`]: {
					p: 2,
					pt: 10,
					width: 250,
					boxSizing: 'border-box',
				},
				}}
			>
				{children}
		</Drawer>
		)
	}

	return (
		<Drawer
			variant="permanent"
			sx={{
			width: 250,
			flexShrink: 0,
			[`& .MuiDrawer-paper`]: {
				p: 2,
				pt: 10,
				width: 250,
				boxSizing: 'border-box',
			},
			}}
		>
			{children}
		</Drawer>
	)
}

export default DrawerBox