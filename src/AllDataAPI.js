import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import Cardapi from './components/Cardapi';



class AllDataAPI extends Component {
    constructor(props) {
        super(props);
        this.state = {
          myData: [],
        }
      }
      componentDidMount = async () => {
       
        let result = await axios.get(`${process.env.REACT_APP_SERVER}/apidata`);
        this.setState({
          myData: result.data
        })
      }
    
addTofav= async(index)=>{
    const objData={
        email: this.props.auth0.user.email,
        name:this.state.myData[index].name,
        img:this.state.myData[index].img,
        level:this.state.myData[index].level,

    }
    await axios.post(`${process.env.REACT_APP_SERVER}/addtoFav`,objData)
}
    render() {
        return (
            <div>
                <h1>All Data from the API</h1>
                <h3>Select your favorites </h3>
                <Cardapi myData={this.state.myData} addTofav={this.addTofav}/>
            </div>
        )
    }
}

export default withAuth0(AllDataAPI);
