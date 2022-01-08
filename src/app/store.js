import { configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice';
import movieReducer from '../features/movie/movieSlice';
/*setting up redux store to store information of aur google authentication */

export default configureStore({
    reducer:{
        user: userReducer,
        movie:movieReducer,
    },
    middleware: getDefaultMiddleware({
        serializableCheck:false,
    }),
   
})