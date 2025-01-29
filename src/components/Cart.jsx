import PropTypes from "prop-types";
import { Card, CardContent, Typography, CardActions, Button, Grid, Container, CardMedia } from '@mui/material';

const Cart = ({ cartItems, handleRemoveItem }) => {

    return (
        <Container>
            <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold', textAlign: 'center', marginTop: '16px' }}>Your Cart</Typography>
            {cartItems.length === 0 ? (
                <Typography variant="h6" sx={{ textAlign: 'center' }}>Your cart is empty</Typography>
            ) : (
                <Grid container spacing={3}>
                    {cartItems.map((item, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%', transition: 'transform 0.2s ease-in-out', '&:hover': { transform: 'translateY(-4px)' } }}>
                                <CardMedia
                                    component="img"
                                    image={item.image}
                                    alt={item.title}
                                    height="200"
                                    sx={{ objectFit: 'contain', padding: '16px' }}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="div" noWrap>
                                        {item.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{ overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
                                        {item.description}
                                    </Typography>
                                    <Typography variant="h6" color="primary" sx={{ mt: 2, fontWeight: 'bold' }}>
                                        ${item.price}
                                    </Typography>
                                </CardContent>
                                <CardActions sx={{ marginTop: 'auto', padding: '16px', gap: '8px', justifyContent: 'flex-start' }}>
                                    <Button variant="contained" color="primary" sx={{ textTransform: 'none', fontWeight: 600 }} onClick={
                                        () => handleRemoveItem(index)
                                    }>
                                        Remove
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                    <Grid item xs={12}>
                        <Typography variant="h6" sx={{ mt: 4, fontWeight: 'bold' }}>
                            Total: ${cartItems.reduce((total, item) => total + item.price, 0).toFixed(2)}
                        </Typography>
                    </Grid>
                </Grid>
            )}
        </Container>
    );
};

Cart.propTypes = {
    cartItems: PropTypes.array.isRequired,
    handleRemoveItem: PropTypes.func.isRequired
};

export default Cart;
