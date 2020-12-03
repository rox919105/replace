import { connect } from 'react-redux';
import {addNewMessageCreator, updateNewMessageBodyCreator} from '../../state/dialogsReducer'
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

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Test);

export default DialogsContainer;