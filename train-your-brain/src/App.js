import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Navbar from "./components/Navbar";
import friends from "./friends.json";
import "./App.css";


class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    message: "Click an image to begin!",
    friends: friends,
    topScore: 0,
    score: 0,
    unselected: friends
  }

  shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

  selectPicture = name => {
    const findPicture = this.state.unselectedPicture.find(item => item.name === name);

    if(findPicture === undefined) {
      this.setState({
        message: "You suck!!",
        topScore: (this.state.score > this.state.topScore) ? this.state.score : this.state.topScore,
        score: 0,
        friends: friends,
        unselectedPicture: friends
      });
    }
    else {
      const newFriends = this.state.unselectedPicture.filter(item => item.name !== name);

      this.setState({
        message: "You are doing Great!!!!!!",
        score: this.state.score + 1,
        friends: friends,
        unselectedPicture: newFriends
      });
    }
    this.shuffleArray(friends);

  };
  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Navbar
          message={this.state.message}
          score={this.state.score}
          topScore={this.state.topScore}
        />
        <Title>Train your Brain</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            select={this.selectPicture}
            score={this.state.score}
          />
        ))}
      </Wrapper>
    );
  }
}
export default App;