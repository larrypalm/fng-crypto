import { Helmet } from "react-helmet"

const GoogleAdSenseHelmet = () => (
    <Helmet>
        <script async src={process.env.REACT_APP_GOOGLE_ADS_URL} crossorigin="anonymous"></script>
    </Helmet>
);

export default GoogleAdSenseHelmet;