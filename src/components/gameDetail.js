import React from 'react';
import {useHistory} from 'react-router-dom'
import { smallImg } from '../util';

//styling and animation
import styled from 'styled-components';
import { motion } from 'framer-motion';

//Redux
import {useSelector} from 'react-redux'

//IMAGES
import apple from '../img/apple.svg';
import gamepad from '../img/gamepad.svg';
import nintendo from '../img/nintendo.svg'
import playstation from '../img/playstation.svg'
import steam from '../img/steam.svg'
import xbox from '../img/xbox.svg'
//star images 
import starEmpty from "../img/star-empty.png";
import starFull from "../img/star-full.png";

const GameDetail = (a) => {
  const history = useHistory();
  //Exit detail
  const exitDetailHandler = (e) => {
      const element = e.target;
      if(element.classList.contains("shadow")){
          document.body.style.overflow = 'auto';
          history.push('/');
      }
  }
    //Data
  const {game,screen,isLoading} = useSelector((s) => s.detail);
  
  //Get Stars
  const getStars = () => {
      const stars = [];
      const rating = Math.round(game.rating);
      for (let i=1; i<=5; i++){
        if(i <= rating){  
          stars.push(<img alt='star' src={starFull} ></img>);
        }else {
          stars.push(<img alt='star' src={starEmpty} ></img>);
        }
    }
    return stars;
};

  //GET PLATFORM IMAGES
  const getPlatform = (platform) => {
      switch (platform) {
          case "PlayStation 4":
              return playstation;
          case "Xbox One":
              return xbox;
          case "PC":
              return steam;
          case "Nintendo Switch":
              return nintendo;
          case "iOS":
              return apple;
          default:
              return gamepad;
      } 
  }

  return(
    <>
    {!isLoading && (  
        <CardShadow className="shadow" onClick={exitDetailHandler} >
            <Detail layoutId={a.pathId}>
                <Stats>
                    <div className="rating">
                        <motion.h3 layoutId={`title ${a.pathId}`}>{game.name}</motion.h3>
                        <p>Rating: {game.rating}</p>
                        {getStars()}
                    </div>
                    <Info>
                        <h3>Platforms</h3>
                        <Platforms>
                            {game.platforms.map((d) => (
                                <img key={d.platform.id} src={getPlatform(d.platform.name)} alt={d.platform.name}></img>
                            ))}
                        </Platforms>
                    </Info>
                </Stats>
                <Media>
                    <motion.img layoutId={`image ${a.pathId}`} src={smallImg(game.background_image,1280)} alt={game.background_image} />
                </Media>
                <Description>
                    <p>{game.description_raw}</p>
                </Description>
                <div className="gallery">
                    {screen.results.map((s) => (
                        <img src={smallImg(s.image,1280)} alt={s.image} key={s.id} />
                    ))}
                </div>
            </Detail>
        </CardShadow>
    )}
    </>                 
  );

};

const CardShadow = styled(motion.div)`
    width: 100%;
    min-height: 100vh;
    overflow-y: scroll;
    background: rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 5;
    &::-webkit-scrollbar{
        width: 0.5rem;
    }
    &::-webkit-scrollbar-thumb{
        background-color:#ff7676 ;
    }
    &::-webkit-scrollbar-track{
        background: white;
    }
`

const Detail = styled(motion.div)`
    width: 80%;
    border-radius: 1rem;
    padding: 2rem 5rem;
    background: white;
    position: absolute;
    z-index: 10;
    left: 10%;
    color: black;
    img{
        width: 100%;
    }
`
const Stats = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    img{
        height: 2rem;
        width: 2rem;
        display: inline;
    }
`
const Info = styled(motion.div)`
    text-align: center;
`
const Platforms = styled(motion.div)`
    display: flex;
    justify-content: space-evenly;
    img{
        margin-left: 3rem;
    }
`
const Media = styled(motion.div)`
    margin-top: 5rem;
    img {
        width: 100%;
        
    }
`
const Description = styled(motion.div)`
    margin: 5rem 0rem;
`

export default GameDetail;