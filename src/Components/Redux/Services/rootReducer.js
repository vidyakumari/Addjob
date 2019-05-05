import {combineReducers} from 'redux'
import {users, registration} from './User/reducer'
import {jobs} from './Body/reducer'
import {Addjobs} from './Addjob/reducer'

const rootReducer = combineReducers({
    users,
    registration,
    jobs, 
    Addjobs
})

export default rootReducer;