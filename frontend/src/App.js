import './App.css';
import { getFng } from './routes/fng'
import { useEffect, useState } from 'react';
import Gauge from './components/Gauge';
import { Helmet } from 'react-helmet';

const formatDate = timestamp => {
    const formattedDate = new Date(timestamp * 1000);
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

    return {
        day: formattedDate.getDate() ?? '',
        month: months[formattedDate.getMonth()] ?? '',
        year: formattedDate.getFullYear() ?? ''
    };
}

function App() {
    const [state, setState] = useState({
        fngNow: {},
        fngHistorical: []
    });

    useEffect(() => {
        const fetchFearAndGreed = async () => {
            try {
                const { data: { max, historical } } = await getFng();

                setState({ 
                    fngNow: {
                        date: formatDate(max?.timestamp),
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
            <Helmet>
                <script async src={process.env.REACT_APP_GOOGLE_ADS_URL} crossorigin="anonymous"></script>
            </Helmet>
            <main className="App-main">
                <h1>Fear and Greed Index Bitcoin</h1>
                {state.fngNow?.value_classification ?? 'Not Available Right Now'}
                <div style={{ width: '50vw' }}>
                    <Gauge
                        value={state.fngNow.value ?? 0}
                    />
                </div>
                <p>Last updated: {state.fngNow.date?.month}</p>
                <ul style={{ maxHeight: '20vh', overflow: 'scroll' }}>
                    {(state.fngHistorical || []).map(data => (
                        <li key={data.timestamp}>
                            <p>{data.date.day} {data.date.month} {data.date.year}</p>
                            <br/>
                            <span>{data.value} - {data.value_classification}</span>
                        </li>
                    ))}
                </ul>
            </main>
        </div>
    );
}

export default App;
