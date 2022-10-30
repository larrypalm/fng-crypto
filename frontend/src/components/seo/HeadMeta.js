import { Helmet } from "react-helmet";

const HeadMeta = ({ title, metaDescription = '', canonical }) => {
    metaDescription = "The crypto fear & greed index provides an easy overview of the current sentiment of the Bitcoin / crypto market at a glance." 
    return (
        <Helmet>
            <title>{title} | {process.env.REACT_APP_SITE_TITLE}</title>
            <meta name="description" content={metaDescription} />
            <link rel="canonical" href={canonical} />
        </Helmet>
    )
}

export default HeadMeta;