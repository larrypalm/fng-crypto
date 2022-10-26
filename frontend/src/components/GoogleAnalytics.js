import Helmet from 'react-helmet';

const GoogleAnalytics = () => (
    <Helmet>
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.REACT_APP_GA_TAG}`}></script>
        <script>
            {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments)}
            gtag('js', new Date());
            gtag('config', '${process.env.REACT_APP_GA_TAG}');`}
        </script>
    </Helmet>
);

export default GoogleAnalytics;