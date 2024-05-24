import { reduxAPI } from '@/store/api'
import { combineReducers } from 'redux'
// import userSlice from '@/store/slices/userSlice'

const rootReducer = combineReducers({
  [reduxAPI.reducerPath]: reduxAPI.reducer,
  //   userSlice,
})

export default rootReducer
