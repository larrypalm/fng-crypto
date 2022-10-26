import { Helmet } from "react-helmet";

const PageTitle = () => (
    <Helmet>
        <title>{process.env.REACT_APP_SITE_TITLE}</title>
    </Helmet>
);

export default PageTitle;