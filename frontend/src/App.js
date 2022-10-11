import './App.css';
import { getFng } from './routes/fng'
import { useEffect, useState } from 'react';
import Gauge from './components/Gauge';
import { Helmet } from 'react-helmet';
import {
    useLocation,
} from 'react-router-dom';
import * as gtag from './lib/gtag';
import GoogleSiteVerification from './components/GoogleSiteVerification';

const formatDate = timestamp => {
    const formattedDate = new Date(timestamp * 1000);
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

    return {
        day: formattedDate.getDate() ?? '',
        month: months[formattedDate.getMonth()] ?? '',
        year: formattedDate.getFullYear() ?? ''
    };
}

const formatCountdown = timestamp => {
    // timestamp
    const date = new Date(timestamp).getTime();
    // get the current time
    const now = new Date().getTime();
    // calculate time between now and time until update
    const distance = date - now;

    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    return {
        hours: `${hours} hours`,
        minutes: `${minutes} minutes`
    }
}

function App() {
    const location = useLocation();
    const [state, setState] = useState({
        fngNow: {},
        fngHistorical: []
    });

    useEffect(() => {
        const fetchFearAndGreed = async () => {
            try {
                const { data: { max, historical } } = await getFng();
                // max means that its the highest timestamp
                setState({ 
                    fngNow: {
                        date: formatDate(max?.timestamp),
                        timeUntilUpdate: formatCountdown(max?.time_until_update),
                        ...max
                    },
                    fngHistorical: (historical || []).map(date => {
                        return {
                            date: formatDate(date?.timestamp),
                            ...date
                        }
                    }).sort((a, b) => b.timestamp - a.timestamp)
                }) 
            } catch (error) {
                console.error('ERROR => ', error);
            }
        }
        fetchFearAndGreed();
    }, []);

    return (
        <div className='App'>
            <GoogleSiteVerification />
            <Helmet>
                <script async src={process.env.REACT_APP_GOOGLE_ADS_URL} crossorigin="anonymous"></script>
            </Helmet>
            <main className="App-main">
                <h1>Fear and Greed Index Bitcoin</h1>
                <p>{state.fngNow?.value_classification ?? 'Not Available Right Now'}</p>
                <div style={{ width: '50vw' }}>
                    <Gauge
                        value={state.fngNow.value ?? 0}
                    />
                </div>
                <p>Last updated: {state.fngNow.date?.month} {state.fngNow.date?.day} {state.fngNow.date?.year}</p>
                <p>Next update: {state?.fngNow.timeUntilUpdate?.hours ?? '0'} {state?.fngNow.timeUntilUpdate?.minutes ?? '0'}</p>
                <br/>
                <p>Historical Values:</p>
                <ul className="historical-values">
                    {(state.fngHistorical || []).map(data => (
                        <li key={data.timestamp} className="historical-value">
                            <p><strong>Date:</strong> {data.date.month} {data.date.day} {data.date.year}</p>
                            <br/>
                            <span><strong>Index:</strong> {data.value} - {data.value_classification}</span>
                        </li>
                    ))}
                </ul>
            </main>

            <footer>
                Source: <a href="https://alternative.me">alternative.me</a>
                <br/>
                <br/>
                Each day <a href="https://alternative.me">alternative.me</a> gathers and analyzes emotions and sentiments from multiple sources and toghether it creates the Fear and Greed Index.
            </footer>
        </div>
    );
}

export default App;
