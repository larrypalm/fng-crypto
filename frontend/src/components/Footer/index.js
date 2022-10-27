import {
    Box,
    Grid,
    Container,
    Link,
    List,
    ListItem
} from '@mui/material';

const Footer = () => {
    return (
        <footer>
            <Box sx={{ display: 'flex' }}>
                <Container sx={{ p: '0px !important' }}>
                    <Grid 
                        container 
                        spacing={5}
                        sx={{ p: '0px !important', display: 'flex' }}
                    >
                        <Grid 
                            item 
                            xs={12} 
                            sm={6} 
                            sx={{ display: 'flex' }}
                        >
                            <p>Copyright© 2022 All Rights Reserved</p>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <List
                                sx={{ p: '0px !important', m: '0px' }}
                            >
                                <ListItem sx={{ p: '0px !important', m: '0 0 12px 0' }}>
                                    <Box>
                                        <Link
                                            className="footer-li" 
                                            href="/" 
                                            color="inherit"
                                            sx={{
                                                textDecoration: 'none',
                                                '&:hover': { 
                                                    color: '#f2a900',
                                                }
                                            }}
                                        >
                                            Home
                                        </Link>
                                    </Box>
                                </ListItem>
                                <ListItem sx={{ p: '0px !important', m: '0 0 12px 0' }}>
                                    <Box>
                                        <Link
                                            className="footer-li" 
                                            href="/terms-conditions" 
                                            color="inherit"
                                            sx={{
                                                textDecoration: 'none',
                                                '&:hover': { color: '#f2a900' }
                                            }}
                                        >
                                            Terms
                                        </Link>
                                    </Box>
                                </ListItem>
                                <ListItem sx={{ p: '0px !important', m: '0 0 12px 0' }}>
                                    <Box>
                                        <Link
                                            className="footer-li" 
                                            href="/privacy-policy" 
                                            color="inherit"
                                            sx={{
                                                textDecoration: 'none',
                                                '&:hover': { color: '#f2a900' }
                                            }}
                                        >
                                            Privacy Policy
                                        </Link>
                                    </Box>
                                </ListItem>
                            </List>      
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </footer>
    )
}

export default Footer;