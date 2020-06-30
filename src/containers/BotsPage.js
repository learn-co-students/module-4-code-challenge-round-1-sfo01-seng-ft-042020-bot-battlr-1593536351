import React, { Component } from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

class BotsPage extends Component {
  //start here with your code for step one
    state = {
      bots: [],
      clickedBots: []
    }


  componentDidMount(){
    fetch("http://localhost:6001/bots")
      .then((resp) => resp.json())
      .then((data) => this.setState({ bots: data}))
  }

  addClickedBot = (bot) => {
    this.setState({ clickedBots: [...this.state.clickedBots, bot]});
  }

  deleteForever = (bot) => {
    console.log(`soon to be deleted`)
     fetch(`http://localhost:6001/bots/${bot.id}`, { method: "DELETE" });
  }

  

  

  render() {
    return <div>{<YourBotArmy clickedBots={this.state.clickedBots} deleteForever={this.deleteForever}/>}
    {<BotCollection bots={this.state.bots} addBot={this.addClickedBot}/>}
     </div>

  }
}

export default BotsPage;
