import { Snackbar, Alert } from '@mui/material'

interface ISnack {
  isOpen: boolean;
  handleClose: () => void;
}
const Snack = (props: ISnack) => {
  const { isOpen, handleClose } = props;
  return (
    <Snackbar
      open={isOpen}
      onClose={handleClose}
      autoHideDuration={3000}
    >
      <Alert
        severity="success"
      >
        Товар добавлен в корзину!
      </Alert>
    </Snackbar>
  )
}

export default Snack