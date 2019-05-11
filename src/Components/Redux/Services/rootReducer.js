import {combineReducers} from 'redux'
import {users, registration} from './User/reducer'
import {jobs} from './Body/reducer'
import {Addjobs} from './Addjob/reducer'
import {Applyjobs, Appliedjobs} from './ApplyJob/reducer'

const rootReducer = combineReducers({
    users,
    registration,
    jobs, 
    Addjobs,
    Applyjobs,
    Appliedjobs
})

export default rootReducer;