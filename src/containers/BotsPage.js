import React, { Component } from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

class BotsPage extends Component {
  //start here with your code for step one
constructor(props) {
  super(props)

  this.state = {
     bots: []
  }
}


  componentDidMount(){
    fetch('http://localhost:6001/bots').then((resp) => resp.json()).then((data) => this.setState({bots: data}))
  }

  render() {
    return <div>
       {<YourBotArmy bots={this.state.bots}/>}
      {<BotCollection bots={this.state.bots}/>}
     
    
    </div>;
  }
}

export default BotsPage;
