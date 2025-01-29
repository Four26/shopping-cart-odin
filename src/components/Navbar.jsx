import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// Common styles for nav items
const navItemStyles = {
    position: 'relative',
    transition: 'color 0.3s ease',
    '&:hover': {
        color: 'lightgray',
    },
    '&::after': {
        content: '""',
        position: 'absolute',
        left: 0,
        bottom: -2,
        width: '0%',
        height: '2px',
        backgroundColor: 'currentColor',
        transition: 'width 0.3s ease',
    },
    '&:hover::after': {
        width: '100%',
    },
};

export default function PrimarySearchAppBar({ cartItems }) {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color='secondary'>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{
                            display: { xs: 'none', sm: 'block' },
                            fontWeight: 'bold',
                            letterSpacing: 1.2
                        }}
                    >
                        FakeStore
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 3,
                        '& > *': { // Apply to all direct children
                            display: 'flex',
                            alignItems: 'center',
                            height: '100%'
                        }
                    }}>
                        <Typography variant="h6" sx={navItemStyles}>
                            <Link
                                to="/"
                                style={{
                                    textDecoration: 'none',
                                    color: 'inherit',
                                    fontWeight: 'bold',
                                }}
                            >
                                Home
                            </Link>
                        </Typography>

                        <Typography variant="h6" sx={navItemStyles}>
                            <Link
                                to='/shop'
                                style={{
                                    textDecoration: 'none',
                                    color: 'white',
                                    fontWeight: 'bold'
                                }}
                            >
                                Shop
                            </Link>
                        </Typography>

                        <Box sx={{
                            ...navItemStyles,
                            display: 'flex',
                            alignItems: 'center',
                            height: '100%'
                        }}>
                            <Tooltip title="Cart">
                                <Link
                                    to='/cart'
                                    style={{
                                        textDecoration: 'none',
                                        color: 'white',
                                        display: 'flex',
                                        alignItems: 'center',
                                        position: 'relative'
                                    }}
                                >
                                    <ShoppingCartIcon sx={{ fontSize: '1.5rem' }} />
                                    {cartItems.length > 0 && (
                                        <Box
                                            sx={{
                                                position: 'absolute',
                                                top: -8,
                                                right: -12,
                                                backgroundColor: 'red',
                                                color: 'white',
                                                borderRadius: '50%',
                                                width: '18px',
                                                height: '18px',
                                                fontSize: '12px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                            }}
                                        >
                                            {cartItems.length}
                                        </Box>
                                    )}
                                </Link>
                            </Tooltip>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

PrimarySearchAppBar.propTypes = {
    cartItems: PropTypes.array,
};