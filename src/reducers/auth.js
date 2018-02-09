import {LOGIN} from '../actions/auth';
const initState = {login: false};
export default function auth(state = initState, action = {}){
    switch(action.type){
        case LOGIN:
            return Object.assign({}, initState, {result: action.result});
        default:
            return initState;
    }
}