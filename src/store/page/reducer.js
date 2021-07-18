
import {HIDE_HEADER} from './action'


 const defaultState = true;

const isShowHeader = (state = defaultState, action) => {
	switch(action.type){
		case HIDE_HEADER:
			return false;
		default:
			return state;
	}
}

export default isShowHeader;