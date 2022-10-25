import { 
    useMediaQuery,
    Button,
    AppBar,
    Box,
    Toolbar,
    Grid,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PolicyIcon from '@mui/icons-material/Policy';
import WorkIcon from '@mui/icons-material/Work';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';
import Drawer from '@mui/material/Drawer';

const Header = () => {
    const matches = useMediaQuery('(min-width:600px)');
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Toolbar sx={{ p: { xs: '16px', sm: '0px 24px'} }}>
            <Grid container spacing={2}>
                <Grid 
                    className='lame'
                    item 
                    xs={12} 
                    sx={{ 
                        flexBasis: 'unset !important', 
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' }
                    }}
                >
                    <Button 
                        className="nav-button"
                        sx={{ 
                            marginRight: { xs: '0px', sm: '12px' },
                            marginBottom: { xs: '12px', sm: '0px' },
                            border: '1px solid #f2a900',
                            backgroundColor: '#f2a900',
                            color: '#4d4d4e',
                            '&.nav-button': {
                                '&:hover': {
                                    background: 'transparent',
                                    color: '#f2a900'
                                }
                            }
                        }} 
                        href="/" 
                        size={matches ? 'small' : 'large'} 
                        variant="contained" 
                        startIcon={<HomeIcon />}
                    >
                        Home
                    </Button>
                    <Button 
                        className="nav-button"
                        sx={{
                            marginRight: { xs: '0px', sm: '12px' },
                            marginBottom: { xs: '12px', sm: '0px' },
                            border: '1px solid #f2a900',
                            backgroundColor: '#f2a900',
                            color: '#4d4d4e',
                            '&.nav-button': {
                                '&:hover': {
                                    background: 'transparent',
                                    color: '#f2a900'
                                }
                            }
                        }} 
                        href="/about" 
                        size={matches ? 'small' : 'large'} 
                        variant="contained" 
                        startIcon={<WorkIcon />}
                    >
                        About
                    </Button>
                    <Button
                        className="nav-button"
                        sx={{
                            border: '1px solid #f2a900',
                            backgroundColor: '#f2a900',
                            color: '#4d4d4e',
                            '&.nav-button': {
                                '&:hover': {
                                    background: 'transparent',
                                    color: '#f2a900'
                                }
                            }
                        }} 
                        href="/terms-conditions" 
                        size={matches ? 'small' : 'large'} 
                        variant="contained" 
                        startIcon={<PolicyIcon />}
                    >
                        Terms and conditions
                    </Button>
                </Grid>
            </Grid>
        </Toolbar>
    );

    return (
        <>
            <AppBar 
                position="relative" 
                component="nav" 
                sx={{ display: 'flex', background: 'transparent', borderBottom: '1px solid #FFF' }}
            >
                {matches ? (
                    <Box>
                        {drawer}
                    </Box>
                ) : (
                    <Box sx={{ display: 'flex', minHeight: '64px' }}>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ m: '0', p: '16px' }}
                        >
                            <MenuIcon size="large" />
                        </IconButton>
                        <Drawer
                            variant="temporary"
                            open={mobileOpen}
                            onClose={handleDrawerToggle}
                            ModalProps={{
                                keepMounted: true, // Better open performance on mobile.
                            }}
                            sx={{
                                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '250px', backgroundColor: '#282c34', },
                            }}
                            
                        >
                            {drawer}
                        </Drawer>
                    </Box>
                )}
            </AppBar>
        </>
    )
}

export default Header;