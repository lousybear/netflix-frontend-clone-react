import './App.css';
import Row from './Row';
import Banner from './Banner';
import Nav from './Nav';
import request from './request';

function App() {
    return (
        <div className='app'>
            <Nav />
            <Banner />
            <Row
                title='Netflix Originals'
                fetchUrl={request.fetchNetflixOriginals}
                isLargeRow
            />
            <Row title='Trending Now' fetchUrl={request.fetchTrending} />
            <Row title='Top Rated' fetchUrl={request.fetchTopRated} />
            <Row title='Action Movies' fetchUrl={request.fetchActionMovies} />
            <Row title='Horror Movies' fetchUrl={request.fetchHorrorMovies} />
            <Row title='Comedy Movies' fetchUrl={request.fetchComedyMovies} />
            <Row title='Romance Movies' fetchUrl={request.fetchRomanceMovies} />
        </div>
    );
}

export default App;
