const About = () => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'left',
                padding: '48px',
                wordBreak: 'break-word'
            }}
        >
            <h1>About</h1>
            Source: <a href="https://alternative.me">alternative.me</a>
            <br/>
            <br/>
            Each day <a href="https://alternative.me">alternative.me</a> gathers and analyzes emotions and sentiments from multiple sources and toghether it creates the Fear and Greed Index.
        </div>
    )
}

export default About;