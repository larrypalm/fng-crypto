import Gauge from '../Gauge';
import { getFng } from '../../routes/fng'
import { useEffect, useState } from 'react';

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

const formatDate = timestamp => {
    const formattedDate = new Date(timestamp * 1000);
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

    return {
        day: formattedDate.getDate() ?? '',
        month: months[formattedDate.getMonth()] ?? '',
        year: formattedDate.getFullYear() ?? ''
    };
}

const Home = () => {
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
        <>
            <h1>Fear and Greed Index Bitcoin</h1>
            <p>Current index: <span style={{ color: '#f2a900' }}>{state.fngNow?.value_classification ?? 'Not Available Right Now'}</span></p>
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
        </>
    )
}

export default Home;