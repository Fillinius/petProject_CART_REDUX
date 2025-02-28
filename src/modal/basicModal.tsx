import * as React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { createModalAction } from '../redux/action'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

export default function BasicModal() {
  const open = useAppSelector((state) => state.modal.loading)
  const dispatch = useAppDispatch()

  return (
    <div style={{ textAlign: 'center' }}>
      <Button
        onClick={() => {
          dispatch(createModalAction())
        }}
        variant="outlined"
        color="success"
      >
        Buy
      </Button>
      <Modal
        open={open}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Are sure that you are ready to buy
          </Typography>
          <Typography id="modal-modal-button" sx={{ mt: 2 }}>
            <Button variant="contained">Close</Button>
          </Typography>
        </Box>
      </Modal>
    </div>
  )
}
