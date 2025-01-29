import { Grid, Card, CardContent, CardMedia, Typography, CardActions, Button, Container } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import PropTypes from 'prop-types';
import { useState, useEffect, useCallback } from 'react';

const StyledButton = styled(Button)(({ theme, variant }) => ({
    textTransform: 'none',
    fontWeight: 600,
    padding: '8px 16px',
    borderRadius: '8px',
    ...(variant === 'primary' && {
        backgroundColor: theme.palette.primary.main,
        color: 'white',
        '&:hover': {
            backgroundColor: theme.palette.primary.dark,
        },
    }),
    ...(variant === 'secondary' && {
        backgroundColor: 'transparent',
        color: theme.palette.primary.main,
        border: `1px solid ${theme.palette.primary.main}`,
        '&:hover': {
            backgroundColor: alpha(theme.palette.primary.main, 0.04),
        },
    }),
}));

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    margin: theme.spacing(2, 0),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    pointerEvents: 'auto'
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        border: '2px solid #00bcd4',
        borderRadius: '20px',
        transition: theme.transitions.create(['width', 'border-color']),
    },
}));

const StyledCard = styled(Card)({
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    transition: 'transform 0.2s ease-in-out',
    '&:hover': {
        transform: 'translateY(-4px)',
    },
});

const StyledCardActions = styled(CardActions)({
    marginTop: 'auto',
    padding: '16px',
    gap: '8px',
    justifyContent: 'flex-start',
});

const Products = ({ products, addToCart }) => {
    const [searchInput, setSearchInput] = useState('');
    const [filteredProducts, setFilteredProducts] = useState(products);

    const handleSearch = useCallback(() => {
        if (searchInput === '') {
            setFilteredProducts(products);
        } else {
            const filteredProducts = products.filter((product) => product.title.toLowerCase().includes(searchInput.toLowerCase()));
            setFilteredProducts(filteredProducts);
        }
    }, [searchInput, products])

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    }

    useEffect(() => {
        handleSearch();
    }, [handleSearch]);

    return (
        <Container>
            <Search>
                <SearchIconWrapper onClick={handleSearch}>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                    value={searchInput}
                    onChange={(event) => setSearchInput(event.target.value)}
                    onKeyDown={handleKeyDown}
                />
            </Search>
            <Grid container spacing={3}>
                {filteredProducts.map((product) => (
                    <Grid item xs={12} sm={6} md={4} key={product.id}>
                        <StyledCard>
                            <CardMedia
                                component="img"
                                image={product.image}
                                alt={product.title}
                                height="200"
                                sx={{ objectFit: 'contain', padding: '16px' }}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div" noWrap>
                                    {product.title}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    sx={{
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                        display: '-webkit-box',
                                        WebkitLineClamp: 2,
                                        WebkitBoxOrient: 'vertical',
                                    }}
                                >
                                    {product.description}
                                </Typography>
                                <Typography
                                    variant="h6"
                                    color="primary"
                                    sx={{ mt: 2, fontWeight: 'bold' }}
                                >
                                    ${product.price}
                                </Typography>
                            </CardContent>
                            <StyledCardActions>
                                <StyledButton variant="primary" onClick={() => addToCart(product)}>
                                    Add to Cart
                                </StyledButton>
                                <StyledButton variant="secondary">
                                    Learn More
                                </StyledButton>
                            </StyledCardActions>
                        </StyledCard>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Products;

Products.propTypes = {
    products: PropTypes.array.isRequired,
    addToCart: PropTypes.func.isRequired
};