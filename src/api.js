//Base URL

const base_url = "https://api.rawg.io/api/games?key=773f7488405b4bdf9856262b5c022380"

//getting the date
const getCurrentMonth= () =>{
    const month =new Date().getMonth() + 1;
    if (month < 10){
        return `0${month}`;
    }else {
        return month;
    }
};

const getCurrentDay= () =>{
    const day =new Date().getDate();
    
    if (day < 10){
        return `0${day}`;
    }else {
        return day;
    }
};

//current day month year
const currentYear= new Date().getFullYear();
const currentMonth= getCurrentMonth();
const currentDay= getCurrentDay();
const currentDate=`${currentYear}-${currentMonth}-${currentDay}`
const lastYear=`${currentYear-1}-${currentMonth}-${currentDay}`
const nextYear=`${currentYear+1}-${currentMonth}-${currentDay}`

//popular games
 const popular_games= `&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
 const upcoming_games= `&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
 const new_games= `&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesURL= () => `${base_url}${popular_games}`
export const upcomingGamesURL= () => `${base_url}${upcoming_games}`
export const newGamesURL= () => `${base_url}${new_games}`

//GAME DETAILS
 export const gameDetailsURL= (game_id) => `https://api.rawg.io/api/games/${game_id}?key=773f7488405b4bdf9856262b5c022380`
 
//GAME screenshots
export const gameSsURL= (game_id) => `https://api.rawg.io/api/games/${game_id}/screenshots?key=773f7488405b4bdf9856262b5c022380`

//searched game
export const searchGameURL = (game_name) => `${base_url}&search=${game_name}&page_size=9`;



// console.log(popularGamesURL());
// console.log(upcomingGamesURL());
// console.log(newGamesURL());
