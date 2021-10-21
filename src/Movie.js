import React from 'react';

const Movie = (props) => {
    return (
        <>
        
        <div className="container-fluid d-flex flex-nowrap   overflow-auto">
        {props.movie.map((movie,index)=>{
            return(
        
             <>       
 <div className="card col-12 m-1" style={{width:"18rem",backgroundColor:"black"}} >
  <img  src={movie.Poster} className="img-fluid img"  style={{backgroundColor:"wheat",width:"500px" ,height:"350px" }}     alt="..." />
  <div className="card-body" style={{fontFamily:"cursive" , color:"white" }}>
  <button type="button" className="btn btn-outline-danger link-btn mb-3 "><a href={"https://www.imdb.com/title/"+movie.imdbID} target="_blank">Watch Trailer</a></button>
    <h5  className="card-text"> Movie Name :{movie.Title}</h5>
    <h5 className="card-text">Release Date :{movie.Year}</h5>
    <br />
     
  </div>
</div>

          </>

          )
        })

        }
        </div>
        </>
    )
}

export default Movie;