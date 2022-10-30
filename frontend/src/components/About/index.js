import HeadMeta from '../seo/HeadMeta';

const About = () => {
    return (
        <>
            <HeadMeta 
                title="About"
                canonical="/about"
            />
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    textAlign: 'left',
                    padding: '48px',
                    wordBreak: 'break-word'
                }}
            >  
                <div className="text-box">
                    <h2>Data Sources</h2> 
                    <p>
                        <a href="https://alternative.me">Alternative.me</a> is gathering data from the five following sources. Each data point is valued the same as the day before in order to visualize a meaningful progress in sentiment change of the crypto market.
                    </p> 
                    <p>
                        First of all, the current index is for bitcoin only (<a href="https://alternative.me">alternative.me</a> will be offering separate indices for large alt coins soon), because a big part of it is the volatility of the coin price.
                    </p> 

                    <h3>Volatility (25 %)</h3> 
                    <p>
                        <a href="https://alternative.me">Alternative.me</a> is measuring the current volatility and max. drawdowns of bitcoin and compare it with the corresponding average values of the last 30 days and 90 days. <a href="https://alternative.me">alternative.me</a> argue that an unusual rise in volatility is a sign of a fearful market.
                    </p> 
                    <h3>Market Momentum/Volume (25%)</h3> 
                    <p>Also, <a href="https://alternative.me">alternative.me</a> measuring the current volume and market momentum (again in comparison with the last 30/90 day average values) and put those two values together. Generally, when <a href="https://alternative.me">alternative.me</a> see high buying volumes in a positive market on a daily basis, <a href="https://alternative.me">alternative.me</a> conclude that the market acts overly greedy / too bullish.</p> 
                    <h3>Social Media (15%)</h3> 
                    <p>While our reddit sentiment analysis is still not in the live index (<a href="https://alternative.me">alternative.me</a> still experimenting some market-related key words in the text processing algorithm), our twitter analysis is running. There, <a href="https://alternative.me">alternative.me</a> gather and count posts on various hashtags for each coin (publicly, <a href="https://alternative.me">alternative.me</a> show only those for Bitcoin) and check how fast and how many interactions they receive in certain time frames). A unusual high interaction rate results in a grown public interest in the coin and in our eyes, corresponds to a greedy market behaviour.</p> 
                    <h3>Surveys (15%) <br/><span className="warning-text-color">Currently paused</span>
                    </h3> 
                    <p>Together with strawpoll.com (disclaimer: <a href="https://alternative.me">alternative.me</a> owns that site), quite a large public polling platform, <a href="https://alternative.me">alternative.me</a> conducting <a href="https://alternative.me">alternative.me</a>ekly crypto polls and ask people how they see the market. Usually, <a href="https://alternative.me">alternative.me</a> seeing 2,000 - 3,000 votes on each poll, so <a href="https://alternative.me">alternative.me</a> do get a picture of the sentiment of a group of crypto investors. <a href="https://alternative.me">alternative.me</a> don’t give those results too much attention, but it was quite useful in the beginning of our studies.</p> 
                    <h3>Dominance (10%)</h3> 
                    <p>The dominance of a coin resembles the market cap share of the whole crypto market. Especially for Bitcoin, <a href="https://alternative.me">alternative.me</a> think that a rise in Bitcoin dominance is caused by a fear of (and thus a reduction of) too speculative alt-coin investments, since Bitcoin is becoming more and more the safe haven of crypto. On the other side, when Bitcoin dominance shrinks, people are getting more greedy by investing in more risky alt-coins, dreaming of their chance in next big bull run. Anyhow, analyzing the dominance for a coin other than Bitcoin, you could argue the other way round, since more interest in an alt-coin may conclude a bullish/greedy behaviour for that specific coin.</p> 
                    <h3>Trends (10%)</h3> 
                    <p><a href="https://alternative.me">Alternative.me</a> pull Google Trends data for various Bitcoin related search queries and crunch those numbers, especially the change of search volumes as <a href="https://alternative.me">alternative.me</a> as recommended other currently popular searches. For example, if you check <a href="https://trends.google.de/trends/explore?date=now%207-d&amp;q=bitcoin">Google Trends for "Bitcoin"</a>, you can’t get much information from the search volume. But currently, you can see that there is currently a rise of the query "bitcoin price manipulation" in the box of related search queries.</p>
                </div>

                <div className="text-box">
                    <h2>Disclaimer</h2>

                    <div>No Investment Advice</div>

                    <p>The information provided on this website does not constitute investment advice, financial advice, trading advice, or any other sort of advice and you should not treat any of the website's content as such. <a href="https://www.bitcoinfeargreedindex.com">bitcoinfeargreedindex.com</a> does not recommend that any cryptocurrency should be bought, sold, or held by you. Do conduct your own due diligence and consult your financial advisor before making any investment decisions.</p>
                </div>

            </div>
        </>
    )
}

export default About;