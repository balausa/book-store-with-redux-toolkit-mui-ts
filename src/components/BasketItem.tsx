import { Close } from "@mui/icons-material";
import { IconButton, ListItem, Typography } from "@mui/material";
import { Order, removeFromOrderA } from '../store/orderSlice';
import { useAppDispatch } from '../hook';

interface IBasketItem {   
    id:string;
    name: string;
    price: number;
    quantity: number;
    key: string;
}
const BasketItem:React.FC<IBasketItem> = ({ id,name, price, quantity }) => {
    const dispatch = useAppDispatch();
    return (
        <ListItem>
            <Typography
                variant="body1"
            >
                {name} {price}тг. x{quantity}
            </Typography>
            <IconButton
                onClick={() => dispatch(removeFromOrderA(id))}
            >
                <Close />
            </IconButton>
        </ListItem>
    );
};

export default BasketItem;