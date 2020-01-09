import React from 'react';

const SearchBox = ({searchChange}) => {
    return (
        <div className='pa2'>
            <input 
            className='pa3 ba b--white bg-white'
            type='search' 
            placeholder='Find a robot' 
            onChange={searchChange}
            />
        </div>    
    );
}

export default SearchBox;