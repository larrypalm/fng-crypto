import './App.css';
import { Helmet } from 'react-helmet';
import {
    Routes,
    Route,
} from 'react-router-dom';
import GoogleSiteVerification from './components/GoogleSiteVerification';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
    return (
        <div className='App'>
            <GoogleSiteVerification />
            <Helmet>
                <script async src={process.env.REACT_APP_GOOGLE_ADS_URL} crossorigin="anonymous"></script>
            </Helmet>
            <Header />
            <main className="App-main">
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/about" element={<Home />} />
                    <Route exact path="/terms-conditions" element={<Home />} />
                    <Route path="*" element={<NotFound />}/>
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default App;
