import React from 'react';
//styling and animation
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { smallImg } from '../util';
import { popup } from '../animations';

//Redux
import {useDispatch} from 'react-redux'
import {loadDetail} from '../actions/detailAction'
import {Link} from 'react-router-dom'

const Game =(a) => {
    const stringPathId = a.id.toString();
    //load details
    const dispatch =useDispatch();
    const loadDetailHandler= () =>{
        dispatch(loadDetail(a.id));
        document.body.style.overflow='hidden'; //stops main page from scrolling
    }


    return(
        <StyledGame layoutId={stringPathId} onClick={loadDetailHandler} variants={popup} initial='hidden' animate='show'>
            <Link to={`/game/${a.id}`}>
              <motion.h3 layoutId={`title ${stringPathId}`}>{a.name}</motion.h3>
              <p>{a.released}</p>
              <motion.img layoutId={`image ${stringPathId}`} src={smallImg(a.image, 640)} alt={a.name} />
            </Link>
        </StyledGame>
    );
};

const StyledGame=styled(motion.div)`
    min-height: 30vh;
    box-shadow: 0px 5px 20px rgba(0,0,0,0.2);
    text-align: center;
    border-radius: 1rem;
    cursor: pointer;
    overflow: hidden;
    img{
        width: 100%;
        height: 40vh;
        object-fit: cover;
    }
`;

export default Game;