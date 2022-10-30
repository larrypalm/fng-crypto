import './App.css';
import {
    Routes,
    Route,
} from 'react-router-dom';
import GoogleSiteVerification from './components/GoogleSiteVerification';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Footer from './components/Footer';
import Header from './components/Header';
import GoogleAnalytics from './components/GoogleAnalytics';
import GoogleAdSense from './components/GoogleAdSense';
import GoogleAdSenseHelmet from './components/GoogleAdSenseHelmet';
import About from './components/About';
import Terms from './components/Terms';
import PrivacyPolicy from './components/PrivacyPolicy';

function App() {
    return (
        <div className='App'>
            <GoogleAnalytics />
            <GoogleSiteVerification />
            <GoogleAdSenseHelmet />
            <GoogleAdSense 
                className="adsbygoogle"
                client="ca-pub-6850093525554389"
                slot="3353523390"
                layout=""
                layoutKey=""
                format="auto"
                responsive="true"
                pageLevelAds={false}
            />
            <Header />
            <main className="App-main">
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/about" element={<About />} />
                    <Route exact path="/terms-conditions" element={<Terms />} />
                    <Route exact path="/privacy-policy" element={<PrivacyPolicy /> } />
                    <Route path="*" element={<NotFound />}/>
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default App;
