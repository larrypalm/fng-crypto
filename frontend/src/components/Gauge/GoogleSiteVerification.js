import Helmet from 'react-helmet';

const GoogleSiteVerification = () => {
    return (
        <Helmet>
            <meta name="google-site-verification" content={process.env.REACT_APP_GOOGLE_SITE_VERIFICATION}></meta>
        </Helmet>
    );
};

export default GoogleSiteVerification;
