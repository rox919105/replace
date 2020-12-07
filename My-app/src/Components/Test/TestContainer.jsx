import { connect } from 'react-redux';
import {addNewMessageCreator} from '../../state/dialogsReducer'
import Test from './Test';


const mapStateToProps = (state) => {
    
    return{
        isAuth: state.auth.isAuth,
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        
        AddMessage: () => {
            dispatch(addNewMessageCreator())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Test);

