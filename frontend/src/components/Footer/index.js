import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const FooterComponent = styled('footer')`
    display: flex;
    
    @media (max-width: 600px) {
        flex-direction: column;
    }
`;

const Box = styled('div')``;

const CopyRightBox = styled('div')`
    width: 50%; 
    text-align: left;

    @media (max-width: 600px) {
        width: 100%;
        margin-bottom: 40px;
    }
`;

const LinkComponent = styled(Link)``;

const Footer = () => {
    return (
        <FooterComponent>
            <CopyRightBox>
                <h3 style={{ margin: '0' }}>Copyright© 2022 All Rights Reserved</h3>
            </CopyRightBox>
            <Box style={{ width: '50%', textAlign: 'left' }}>
                <Box style={{ marginBottom: '12px' }}>
                    <LinkComponent
                        className="footer-li"
                        to="/"
                        color="inherit"
                    >
                        Home
                    </LinkComponent>
                </Box>
                <Box style={{ marginBottom: '12px' }}>
                    <LinkComponent
                        className="footer-li"
                        to="/terms-conditions"
                        color="inherit"
                    >
                        Terms
                    </LinkComponent>
                </Box>
                <Box>
                    <LinkComponent
                        className="footer-li"
                        to="/privacy-policy"
                        color="inherit"
                    >
                        Privacy Policy
                    </LinkComponent>
                </Box>
            </Box>
        </FooterComponent>
    )
}

export default Footer;