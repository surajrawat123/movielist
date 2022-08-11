import React from 'react'
import './Detail.scss'
import { useLocation } from 'react-router'

const Detail = () => {

    const { state } = useLocation();
    console.log(state);

    return (
        <div className='detail-container'>
            <div className='movie-page'>
                <div>
                    <img className='movie-image' src={state.image} alt='movie' />
                    <p className='movie-title'>{state.title}</p>
                </div>
                <div className='info'>
                    <p>{state.synopsis}</p>
                    <h3>Release: {state.releaseDate}</h3>
                </div>
            </div>

        </div>
    )
}

export default Detail