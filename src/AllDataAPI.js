import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import ApiCards from './components/ApiCards';


class AllDataAPI extends Component {

    constructor(props) {
        super(props);
        this.state = {
            colorsData: [],
        }
    }

    componentDidMount = () => {

        axios.get(`${process.env.REACT_APP_SERVER}/apidata`).then(apidata => {
            this.setState({
                colorsData: apidata.data
            })
        }).catch(error => {
            console.error(error);
        })
    }

    addToFav =(idx) => {

        const favdata = {
            email: this.props.auth0.user.email,
            name: this.state.colorsData[idx].name,
            img: this.state.colorsData[idx].img,
        }
        
        axios.post(`${process.env.REACT_APP_SERVER}/post`, favdata)
        .catch(error => {
            console.error(error);
        })
    }

    render() {
        return (
            <div>
                <h1>All Data from the API</h1>
                <h3>Select your favorites :)</h3>

                <ApiCards colorsData={this.state.colorsData} addToFav={this.addToFav}/>

            </div>
        )
    }
}

export default withAuth0(AllDataAPI);
