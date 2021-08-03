import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MyFavorites.css';
import { withAuth0 } from '@auth0/auth0-react';
import FavCard from './components/FavCard';
import axios from 'axios';
import UpdateModel from './components/UpdateModel';

class MyFavorites extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      favorites: [],
      showingModel: false,
      index: 0,
      fav: {},
    }
  }

  componentDidMount = () => {

    axios.get(`${process.env.REACT_APP_SERVER}/get?email=${this.props.auth0.user.email}`).then(favoritedata => {
      this.setState({
        favorites: favoritedata.data
      })
    }).catch(error => {
      console.error(error);
    })
  }

  delete = (idx) => {
    axios.delete(`${process.env.REACT_APP_SERVER}/delete/${idx}?email=${this.props.auth0.user.email}`).then(favoritedata => {
      this.setState({
        favorites: favoritedata.data
      })
    }).catch(error => {
      console.error(error);
    })
  }


  showModel = (idx) => {
    this.setState({
      index: idx,
      showingModel: true,
      fav: {
        name: this.state.favorites[idx].name,
        img: this.state.favorites[idx].img,
      }
    })
  }

  closeModel = () => {
    this.setState({
      showingModel: false
    })
  }

  updateColor = (e) => {
    e.preventDefault();

    const favdata = {
      email: this.props.auth0.user.email,
      name: e.target.Cname.value,
      img: e.target.Cimg.value,
    }
    axios.put(`${process.env.REACT_APP_SERVER}/put/${this.state.index}`, favdata).then(favoritedata => {
      this.setState({
        favorites: favoritedata.data
      })
    }).catch(error => {
      console.error(error);
    })
  }


  render() {
    return (
      <>
        <h1>My Favorites</h1>
        <p>
          This is a collection of my favorites
        </p>


        <FavCard favData={this.state.favorites} delete={this.delete} showModel={this.showModel} />

        {this.state.showingModel && <UpdateModel close={this.closeModel} show={this.state.showingModel} updateColor={this.updateColor} fav={this.state.fav} />}
      </>
    )
  }
}

export default withAuth0(MyFavorites);

