import React from 'react';

function Search(props) {

    return(
        <section className="search-input">
            <input
            type="Text"
            placeholder="Type avengers "
            onChange = {props.handleinput}
            onKeyPress = {props.searchinput}
            />
        </section>
    );

}

export default Search;