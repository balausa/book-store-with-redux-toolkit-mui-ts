import { ShoppingBasket } from '@mui/icons-material';
import { Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import BasketItem from './BasketItem';
import { Order } from '../store/orderSlice';

interface IBasket {
    order: Order[];
    cartOpen: boolean;
    closeCart: ({ }: boolean) => void;

}
const Basket = (props: IBasket) => {
    const { cartOpen,
        closeCart,
        order = [] } = props;

    return (
        <Drawer
            anchor="right"
            open={cartOpen}
            onClose={closeCart}
        >
            <List
                sx={{ width: '350px' }}
            >
                <ListItem>
                    <ListItemIcon>
                        <ShoppingBasket />
                    </ListItemIcon>
                    <ListItemText primary="Корзина" />
                </ListItem>
                <Divider textAlign="center">
                    Список товаров
                </Divider>
                {!order.length ? (
                    <ListItem>
                        Корзина пуста!
                    </ListItem>
                ) : (
                    <>
                        {order.map((item: Order) => (
                            <BasketItem
                                key={item.name}
                                {...item} />))}
                        <Divider />
                        <ListItem>
                            <Typography sx={{ fontWeight: 700 }}>
                                Общая стоимость:{' '}
                                {order.reduce((acc, item) => {
                                    return acc + item.price * item.quantity;
                                }, 0)}{' '}
                                тенге.
                            </Typography>
                        </ListItem>
                    </>
                )}

            </List>
        </Drawer>
    )
}
export default Basket;