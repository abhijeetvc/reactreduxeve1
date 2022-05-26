import { addCounter } from "./actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

function AddCounter(props){

    return(
        <div>
            <button onClick={()=>props.dispatch(addCounter())}>Add</button>
        </div>
    )
}

function mapDispatchToProps(dispatch){
    return{
        actions:bindActionCreators(addCounter,dispatch)
    }
}

export default connect(mapDispatchToProps)(AddCounter)