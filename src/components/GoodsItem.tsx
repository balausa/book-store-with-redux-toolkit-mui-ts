import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { useAppDispatch } from '../hook';
import { Goods } from '../store/goodsSlice';
import { Order, addToOrderA, removeFromOrderA } from '../store/orderSlice';

interface IGoodsItem {
    id: string;
    name: string;
    price: number;
    setOrder: (goodsItem: Order) => void;
    poster?: string;
    author?: string
}

const GoodsItem = (props: IGoodsItem) => {
    const dispatch = useAppDispatch();
    const { name, price, setOrder, poster, author } = props;

    return (
        <Grid item xs={4} >
            <Card
                sx={{ height: '100%' }}
            >
                <CardMedia
                    sx={{ height: 200 }}
                    image={poster}
                    title={name}
                />
                <CardContent>
                    <Typography
                        variant="h6"
                        component="h3"
                    >
                        Автор:{author}
                    </Typography>
                    <Typography
                        variant="body1"
                    >
                        {name}
                    </Typography>
                    <Typography
                        variant="body2"
                    >
                        Цена: {price} руб.
                    </Typography>
                    <CardActions >
                        <Button

                            variant="contained"
                            onClick={() => setOrder({
                                id: props.id,
                                name: props.name,
                                price: props.price,
                                quantity: 0
                            })
                            }
                        >
                            Купить
                        </Button>
                    </CardActions>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default GoodsItem;