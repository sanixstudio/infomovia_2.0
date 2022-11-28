import React from 'react'
import { IMG_URL } from '../../utils/constants'
import './poster.styles.css'

const Poster = ({ movieInfo }) => {
    const POSTER_IMG = IMG_URL + movieInfo.poster_path
    return (
        <div className='poster'>
            <img src={POSTER_IMG} alt="" />
        </div>
    )
}

export default Poster