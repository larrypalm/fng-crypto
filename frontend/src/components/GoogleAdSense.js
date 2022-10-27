import { useEffect } from 'react';

const GoogleAdSense = ({ 
    className = '',
    style = { display: 'block' },
    client,
    slot,
    layout = '',
    layoutKey = '',
    format = 'auto',
    responsive = 'false',
    pageLevelAds = false,
    adTest,
    children,
    ...rest
}) => {
    useEffect(() => {
        const p = {};
        if (pageLevelAds) {
            p.google_ad_client = client;
            p.enable_page_level_ads = true;
        }

        try {
            if (typeof window === 'object') {
                (window.adsbygoogle = window.adsbygoogle || []).push(p);
            }
        } catch {
            // Pass
        }
        // eslint-disable-next-line 
    }, [])

    return (
        <ins
            className={`adsbygoogle ${className}`}
            style={style}
            data-ad-client={client}
            data-ad-slot={slot}
            data-ad-layout={layout}
            data-ad-layout-key={layoutKey}
            data-ad-format={format}
            data-full-width-responsive={responsive}
            data-adtest={adTest}
            {...rest}
        >
            {children}
        </ins>
    )
}

export default GoogleAdSense;