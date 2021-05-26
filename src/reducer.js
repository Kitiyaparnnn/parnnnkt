export const initialState = {
    user : null,
    playlist :[],
    playing : false,
    item : null,
    //remove after finishing developing...
    // token : 'BQDO2bkqYtPymd6OsWFIoybz1pVXQizDF8Bizm3FZZB2GXAegl…tUmw15C4QWlDlKuWmHn9VOzcXU0ECGBZuC-4xPe_-_uUIXPM3'
};

const reducer = (state,action) => {
    console.log(action);
    switch(action.type){
        case 'SET_USER':
            return{
                ...state,
                user : action.user,
            };
        case 'SET_TOKEN':
            return{
                ...state,
                token : action.token
            }
        case 'SET_PLAYLISTS' :
            return{
                ...state,
                playlists : action.playlists
            }
        case 'SET_DISCOVER_WEEKLY' :
            return{
                ...state,
                discover_weekly : action.discover_weekly
            }
        default :
            return state;
    }

};

export default reducer;