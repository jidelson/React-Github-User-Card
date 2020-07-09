import React from 'react';
import './App.css';
import MyCard from './components/Card';
import axios from 'axios';
import FollowerCard from './components/FollowerCard';

const url = 'https://api.github.com/users/jidelson'
const followers = 'https://api.github.com/users/jidelson/followers'

class App extends React.Component {

  constructor(){
  super();
  this.state = {
    users: [],
    followers: []
  }
  }



  componentDidMount(){
    console.log("cDM is fetching data...");
    axios.get(url)
    .then(res => {
    console.log(res);
    this.setState({ 
      users:res.data
    }) 
  })
    .catch (err => {
    console.log(err)
  })
    axios.get(followers)
    .then(res => {
    console.log(res);
    this.setState({
      followers:res.data
    })
  })
  .catch (err => {
  console.log(err)
  })
  }
  render(){
  return(
    <div>
      <MyCard 
      userProps={this.state.users}
      />
      {
      this.state.followers.map(user => {
        return (<FollowerCard
        userProps={user}
        />)
      })
      }
    </div>
  )
}
};

export default App;