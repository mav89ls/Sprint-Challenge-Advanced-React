import React from "react";
import PlayerCard from "./components/PlayerCard";
import Navbar from "./components/NavBar";
import "./App.css";

//belowe we are creating a class component that will hold state in an array called data. we will use the lifecycle method component did mount to fetch the data from that API. then pass in that information through props into the other components.

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    // console.log("CDM");
    fetch("http://localhost:5000/api/players")
      .then(res => res.json())
      .then(names => this.setState({ data: names }))
      .catch(err => console.log("something went wrong"));
  }

  render() {
    return (
      <div className="App">
        <div>
          <Navbar />
        </div>
        <div className="cards">
          <h1>{console.log(this.state.name)}</h1>
          {this.state.data.map(players => (
            <PlayerCard key={players.id} players={players} />
          ))}
        </div>
      </div>
    );
  }
}
export default App;
