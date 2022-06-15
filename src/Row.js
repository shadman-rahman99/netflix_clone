import React, {useState, useEffect} from 'react'
import instance from './axios';
import './Row.css'
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer'

const baseURL = "https://image.tmdb.org/t/p/original";

// Recieving props: title,fetchURL passed from App.js as a 
// function arguement
function Row({title,fetchURL,isLargeRow }) {
    // setting up states.setMovies will store incoming data from api
    // into movies.Initially it is set to empty array
    const [movies, setMovies] = useState([]);
    const [trailerURL, settrailerURL] = useState("");
    useEffect(() => {
        async function fetchData(){
            // instance.get(fetchURL) will ammend the baseURL
            // in axios.js with the url sent through fetchURL
            // from App.js which will produce a URL like
            // this: https://api.themoviedb.org/3/discover/tv?api_key=266173b498668a7e5c743c4ab33e7696&with_networks=213.
            // This will also automatically replace the variable
            // ${API_key} with its actual value.Finally it calls a
            // get request on these api URls.
            const request = await instance.get(fetchURL);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, 
    // Anytime we bring data into useEffect, e.g fetchURL
    // from App.js, we'll have to mention them in array
    // below.So whenever URL/data in fetchURL changes
    // useEffect will trigger and call asynchronously its 
    // function to re-render data (Moives/shows...etc)
    //  coming in through the api.If the array is empty
    // then useEffect will call function only once when
    // Row component reloads/loads
    [fetchURL]);

    const options ={
        height: "390",
        width: "100%",
        playerVars: {
            // 
            autoplay:1,
        }
    }
    const handleClick = (movie)=>{
        // If trailerURL is already true then <youtube/>
        // component is removed from screen.
        if(trailerURL)
        settrailerURL('');
        else{
            // Often times movie has undefined name so
            // empty string is also considered as an 
            // argument preventing any crash. If any option is 
            // true, then() function is called which 
            // proives a video url from youtube.
            // movieTrailer finds a trailer for a movie based on
            // its name from the variable movie?.name . 
            movieTrailer(movie?.name || "")
            .then((url)=>{
                // urlParams has all the values of search parameters
                // from the youtube video url. E.g. ?v , ?t are 
                // search params from the link below: 
                // https://www.youtube.com/watch?v=-cMqr9HpZ-Y&t=7201s
                const urlParams = new URLSearchParams(
                    new URL(url).search
                )
                // we get the value from the search param ?v and
                // set it to trailerURL
                settrailerURL(urlParams.get('v'));
            })
            .catch((error)=> console.log(error))
        }
    }

    return (
        <div className="row">
            <h2>{title} </h2>
            <div className="row_posters">

                {/*movies.map() maps through (for loop) 
                the movies array.Each object in the 
                individual index is specified as movie.
                This URL: ${baseURL}/${movie.poster_path}
                is used to fetch each movie's poster*/}
                {movies.map(movie =>(
                    <img 
                    // key is used for optimisation. A unique
                    // value has to be passed to key which represents
                    // each object from the array movies. Whenever
                    // an image/data changes rather than re-rendering
                    // entire api React re-render what needs to be.  
                    // Use key when long lists are printed
                    key={movie.id}
                    onClick= {()=> handleClick(movie)}
                    // if isLargeRow is true then 
                    // add row_posterLarge class.
                    className={`row_poster ${isLargeRow && "row_posterLarge"} `}
                    src= {`${baseURL}/${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                    alt={movie.name}/>
            ))}
            </div>
            {/* If trailerURL is true <YouTube/> component
            is displayed, playing the movie trailer */}
            {trailerURL  && <YouTube videoId={trailerURL} opts={options} />}
        </div>
    )
}
export default Row

