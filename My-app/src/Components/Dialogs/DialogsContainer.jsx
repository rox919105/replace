import { connect } from 'react-redux';
import { compose } from 'redux';
import {addNewMessageCreator, updateNewMessageBodyCreator} from '../../state/dialogsReducer'
import { withAuthRedirect } from '../Hoc/withAuthRedirect';
import Dialogs from './Dialogs'


const mapStateToProps = (state) => {
    
    return{
        personsData: state.dialogsPage.personsData,
        messageData: state.dialogsPage.messageData,
        newMessageBody: state.dialogsPage.newMessageBody,
        isAuth: state.auth.isAuth,
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        MessageChange: (body) => {
            let action = updateNewMessageBodyCreator(body)
            dispatch(action);
        },
        AddMessage: () => {
            dispatch(addNewMessageCreator())
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)
