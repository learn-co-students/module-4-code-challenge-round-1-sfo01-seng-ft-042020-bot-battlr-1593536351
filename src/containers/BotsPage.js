import React, { Component } from "react";

import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'


class BotsPage extends Component {
  state = {
    bots: [],
    myBots: []
  }

  componentDidMount() {
    fetch('http://localhost:6001/bots')
      .then(resp=>resp.json())
      .then(json=>this.setState({bots: json}))
  }

  addBot = (bot) => {
    const currArmy = this.state.myBots;

    if (!currArmy.includes(bot)) {    //no duplicate bots
      currArmy.push(bot)              
      this.setState({
        myBots: currArmy
      });
    }
  }

  removeBot = (byeBot) => {
    const newArmy = this.state.myBots.filter(bot=>bot.id !== byeBot.id)
    this.setState({
      myBots: newArmy
    })
  }

  decomissionBot = (event, id) => {
    event.stopPropagation();
    const myBots = this.state.myBots.filter(bot=>bot.id !== id)
    const allBots = this.state.bots.filter(bot=>bot.id !== id)
    this.setState({
      bots: allBots,
      myBots: myBots
    }) //optimistic render

    this.scrapFromBackend(id)
  }

  scrapFromBackend = (id) => {
    const config = {
                  method: "DELETE"
    }
    
    fetch(`http://localhost:6001/bots/${id}`, config)
      .then(resp=>console.log(`Deleting Robot ID#${id}  Status: ${resp.statusText}`))  //logs OK or Not Found
  }

  render() {
    return (
            <div>
              <YourBotArmy destroy={this.decomissionBot} click={this.removeBot} bots={this.state.myBots} />
              <BotCollection destroy={this.decomissionBot} click={this.addBot} bots={this.state.bots} />
            </div>
    )}
}

export default BotsPage;
