import React from 'react'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert, {AlertProps} from '@mui/material/Alert'
import {useAppDispatch, useAppSelector} from "../../redux/redux-store";
import {setErrorAC} from "../../redux/app-reducer";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />
})

export const ErrorSnackbar = () => {
  const error = useAppSelector<string | null>(state => state.appReducer.error)
  const dispatch = useAppDispatch()

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }
  dispatch(setErrorAC(null))
  }

  return (
    <Snackbar anchorOrigin={{vertical: 'bottom', horizontal: 'center'}} open={!!error} autoHideDuration={3000}
              onClose={handleClose}>
      <Alert onClose={handleClose} severity='error' sx={{width: '100%'}}>
        {error}
      </Alert>
    </Snackbar>
  )
}
