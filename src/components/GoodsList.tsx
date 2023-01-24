import { Grid } from '@mui/material';
import GoodsItem from './GoodsItem';
import { Goods } from '../store/goodsSlice';
import { Order } from '../store/orderSlice';

interface IGoodsList {
    goods: Goods[];
    setOrder: (goodsItem: Order) => void;
}

const GoodsList = (props: IGoodsList) => {
    const { goods, setOrder } = props;

    return (
        <Grid container spacing={2}>
            {goods.map((item) => (
                <GoodsItem key={item.id} setOrder={setOrder} {...item} />
            ))}
        </Grid>
    );
};

export default GoodsList;