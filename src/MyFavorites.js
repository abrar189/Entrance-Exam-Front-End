import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MyFavorites.css';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import Cardfav from './components/Cardfav';
import UpdateModal from './components/UpdateModal';


class MyFavorites extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myData: [],
      index: 0,
      showModal: false,
      selectData: {},
    }
  }
  componentDidMount = async () => {
    let email = this.props.auth0.user.email
    let result = await axios.get(`${process.env.REACT_APP_SERVER}/dataDB?email=${email}`);
    this.setState({
      myData: result.data
    })
  }
  deleteCard = async (index) => {
    let email = this.props.auth0.user.email
    let result = await axios.delete(`${process.env.REACT_APP_SERVER}/delete/${index}?email=${email}`);
    this.setState({
      myData: result.data
    })

  }
  updateCard = async (e) => {
    e.preventDefault()
    const objData = {
      email: this.props.auth0.user.email,
      name: e.target.name.value,
      img: e.target.img.value,
      level: e.target.level.value,
    }
    let result = await axios.put(`${process.env.REACT_APP_SERVER}/update/${this.state.index}`, objData);
    this.setState({
      myData: result.data
    })
  }
  handleClose = () => {
    this.setState({
      showModal: false,
    })
  }

  showUpdateModal = (index) => {
    this.setState({
      showModal: true,
      index: index,
      selectData: {
        name: this.state.myData[index].name,
        img: this.state.myData[index].img,
        level: this.state.myData[index].level,
      }
    })
  }
  render() {
    return (
      <>
        <h1>My Favorites</h1>
        <p>
          This is a collection of my favorites
        </p>
        <Cardfav myData={this.state.myData} deleteCard={this.deleteCard} showUpdateModal={this.showUpdateModal} />
        <UpdateModal handleClose={this.handleClose} showModal={this.state.showModal} updateCard={this.updateCard} selectData={this.state.selectData}/>
      </>
    )
  }
}

export default withAuth0(MyFavorites);

