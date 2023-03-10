import { AppBar, IconButton, Toolbar, Typography, Badge } from '@mui/material';
import { ShoppingBasket } from '@mui/icons-material';

interface IHeader {
  handleCart: () => void;
  orderLen: number
}
function Header(props: IHeader) {
  const { handleCart, orderLen } = props;
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
        >
          Book Store
        </Typography>
        <IconButton
          color="inherit"
          onClick={handleCart}
        >
          <Badge
            color="secondary"
            badgeContent={orderLen}
          >
            <ShoppingBasket />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default Header
