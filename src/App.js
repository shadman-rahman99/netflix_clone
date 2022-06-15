import './App.css';
import Row from './Row';
import request from './request';
import Banner from './Banner';
import Nav from './Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner/>
      {/* Passing props such as title to ROW component 
      with the value NETFLIX ORIGINALS and more..*/}
      {/*isLargeRow is an uninitialized variable which 
      is by default true. We want to set the row for 
      NETFLIX Originals larger than other  */}
      <Row title="NETFLIX ORIGINALS"
      fetchURL={request.fetchNetflixOriginals} 
      isLargeRow />
      <Row title="Trending Now" fetchURL={request.fetchTrending} />
      <Row title="Top Rated" fetchURL={request.fetchTopRated} />
      {/* <Row title="Action Movies" fetchURL={request.fetchActionMovies} /> */}
      <Row title="Comedy Movies" fetchURL={request.fetchComedyMovies} />
      <Row title="Horror Movies" fetchURL={request.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchURL={request.fetchRomanceMovies} />
      <Row title="Documentaries" fetchURL={request.fetchDocumentariesMovies} />
    </div>
  );
}

export default App;
