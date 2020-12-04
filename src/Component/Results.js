import React from 'react';


function Results(props){
    return(
        <section>
            {props.results.map((result,index)=>{
                //{console.log(result)}
                return(
                <div key={index} className="Results">
                    <img src={result.Poster} alt = "Poster is not available"></img>
                    <div>{result.Title}</div>
                </div>
                )
            })}
        </section>
    );

}

export default Results;