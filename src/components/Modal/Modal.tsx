import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import React from 'react'

const Modal = () => {
	return (
		<Dialog open={openDialog} onClose={cancelUpload}>
			<DialogTitle>Перезаписати дані?</DialogTitle>
			<DialogContent>
				<DialogContentText>
					Це замінить поточні експерименти новими з файлу <strong>{pendingFile?.name}</strong>.
					Ви впевнені, що хочете продовжити?
				</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button onClick={cancelUpload} color="error">
					Скасувати
				</Button>
				<Button onClick={confirmUpload} color="primary" variant="contained">
					Завантажити
				</Button>
			</DialogActions>
      </Dialog>
	)
}

export default Modal