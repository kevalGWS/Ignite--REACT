const initialState = {
    game : { platforms: []},
    screen : { results: []},
    isLoading : true,
};
//adding empty array beacuse its giving error on map
const detailReducer = (state=initialState,action)=>{
    switch (action.type) {
        case "GET_DETAIL":
            return{
                ...state,
                game: action.payload.game,
                screen: action.payload.screen,
                isLoading: false,
            };
        case "LOADING_DETAIL":
            return{
                ...state,
                isLoading: true,
            }
    
        default:
            return{...state}
    }
    
}

export default detailReducer;