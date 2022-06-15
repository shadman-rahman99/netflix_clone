import React, {useState, useEffect} from 'react'
import instance from './axios'
import request from './request'
import './Banner.css'

function Banner() {

    const [movie, setMovie] = useState([]);
    useEffect(() => {
        async function fetchData(){
            const req = await instance.get(request.fetchNetflixOriginals);
            setMovie(req.data.results[
                // Randomly selecting any movie from the
                // results[]. req.data.results.length -1
                // is used to not go out of total index of 
                // the results[]  
                Math.floor(Math.random()*req.data.results?.length -1)
            ]);
            return req;
        }
        fetchData();
    }, []);
    console.log(movie);

    // ################# RANDOM FUNCTION(S) ##############
    function truncate(str, n){
        return str?.length>n ? str.substr(0,n-1)+"...":str;
    }
    // ################# ################### ##############

    return (
       <header
        className="banner"
        style={{
            // below are JS codes that work like CSS
            backgroundSize: "cover",

            // "?." in ${movie?.backdrop_path} is called
            // an optional chaining operator that will handle
            // the error elegantly if movie is undefined 
            // rather than throwing in inconvenient alert
            backgroundImage: `url(
            "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
            )`,
            backgroundPosition: "center center",
        }}
       >
            <div className="banner_contents">
             {/* title */}
             <h1 className="banner_title">
                {movie?.title || movie?.name || movie?.original_name}
             </h1>
                <div className="banner_buttons">
                <button className="banner_button">Play</button>
                <button className="banner_button">My list</button>
                </div>
                <h1 className="banner_description">
                    {truncate(movie?.overview, 150)} 
                </h1>
             </div>
             <div className="banner-fadebottom"></div>
       </header>
    )
}

export default Banner
