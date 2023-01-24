import { useState } from 'react';
import { Container } from '@mui/material';
import GoodsList from './GoodsList';
import Search from './Search';
import Header from './Header';
import Basket from './Basket';
import Snack from './Snack';
import { useAppSelector, useAppDispatch } from '../hook';
import { Goods } from '../store/goodsSlice';
import { addToOrderA , Order} from '../store/orderSlice';

const App = () => {
    const goods = useAppSelector(state => state.goods.list);
    const order = useAppSelector(state => state.order.order);

    const dispatch = useAppDispatch();

    const [search, setSearch] = useState('');
    const [products, setProducts] = useState(goods);
    const [isCartOpen, setCartOpen] = useState(false);
    const [isSnackOpen, setSnackOpen] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.value) {
            setProducts(goods);
            setSearch('');
            return e.preventDefault();
        }

        setSearch(e.target.value);
        setProducts(
            products.filter((good) =>
                good.name.toLowerCase().includes(e.target.value.toLowerCase()) || good.author?.toLowerCase().includes(e.target.value.toLowerCase()))
        )
    };

    const addToOrder = (goodsItem: Order) => {
       dispatch(addToOrderA(goodsItem))
        setSnackOpen(true);
    };
    return (
        <>
            <Header
                handleCart={() => setCartOpen(true)}
                orderLen={order.length}

            />
            <Container
                sx={{ mt: '1rem' }}
            >
                <Search
                    value={search}
                    onChange={handleChange}
                />
                <GoodsList
                    goods={products}
                    setOrder={addToOrder}
                />
            </Container>
            <Basket
                order={order}
                cartOpen={isCartOpen}
                closeCart={() => setCartOpen(false)}
            />
            <Snack
                isOpen={isSnackOpen}
                handleClose={() => setSnackOpen(false)} />
        </>
    );
}

export default App;