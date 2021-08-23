import React,{useEffect} from 'react';
import GameDetails from '../components/gameDetail';
//redux
import {useDispatch,useSelector} from "react-redux";
import {loadGames} from '../actions/gamesAction';

//components
import Game from '../components/game';

//styling and animation
import styled from 'styled-components';
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import { fadeIn } from '../animations';
import { useLocation } from 'react-router-dom';

const Home = () => {
    //get current location
    const location = useLocation();
    const pathId = location.pathname.split("/")[2]
    
    //Fetch games
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(loadGames());
    },[dispatch]);

    //Get that data back
    //const games= useSelector((s)=> s.games);
    //console.log(games);
    const {popular, newGames, upcoming, searched}= useSelector((s)=> s.games);
    

    return(
        <GameList variants={fadeIn} initial='hidden' animate='show' >
          <AnimateSharedLayout >
            <AnimatePresence>
              {pathId && <GameDetails pathId={pathId} />}
            </AnimatePresence>
            {/* we use searched.length because initially 
            the searched is empty array and in js empty arrary
             is truthy value s owe use length which is 0 equals
             to falsy value */}
            {searched.length ? (
              <div>
                <h2>Searched Games</h2>
                <Games>
                    {searched.map((gam)=>(
                        <Game name={gam.name} released={gam.released} id={gam.id} image={gam.background_image} rating={gam.rating} />
                    ))}
                </Games>
              </div>
            ) : ''}
            <h2>Upcoming Games</h2>
            <Games>
                {upcoming.map((gam)=>(
                    <Game name={gam.name} released={gam.released} id={gam.id} image={gam.background_image} rating={gam.rating} />
                ))}
            </Games>
            <h2>Popular Games</h2>
            <Games>
                {popular.map((gam)=>(
                    <Game name={gam.name} released={gam.released} id={gam.id} image={gam.background_image} rating={gam.rating} />
                ))}
            </Games>
            <h2>New Games</h2>
            <Games>
                {newGames.map((gam)=>(
                    <Game name={gam.name} released={gam.released} id={gam.id} image={gam.background_image} rating={gam.rating} />
                ))}
            </Games>
          </AnimateSharedLayout>
        </GameList>
    );
};

const GameList=styled(motion.div)`
    padding: 0rem 5rem;
    h2{
        padding: 5rem 0rem;
    }
`;
const Games=styled(motion.div)`
    min-height: 80vh;
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(400px,1fr));
    grid-column-gap: 3rem;
    grid-row-gap: 5rem;
`;

export default Home;