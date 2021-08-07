import React from 'react';
import { connect } from 'react-redux';
import { set_data } from '../../store/action'
import './style.css';

class Home extends React.Component {
    render(){
        console.log(this.props)
        return (
            <div>
                <h1>Home</h1>
                <button onClick={()=>this.props.set_data()}>SETDATA</button>
            </div>
        )
    }
} 

const mapStateToProps = (state) => ({
 name:state.users
})

const mapDispatchToProp = dispatch => ({
    set_data: (data) => dispatch(set_data(data))
})
export default connect(mapStateToProps,mapDispatchToProp) (Home);