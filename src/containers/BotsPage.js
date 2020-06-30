import React, { Component } from "react";

import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import BotSpecs from '../components/BotSpecs'

class BotsPage extends Component {
  state = {
    bots: [],
    myBots: [],
    selectedBot: [],
    botSelected: false
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
        myBots: currArmy,
        botSelected: false,
        selectedBot: null
      });
    }
  }

  showBotDetails = (bot) => {
    this.setState({
      botSelected: true,
      selectedBot: bot
    })
  }

  reset = () => {
    this.setState({
      botSelected: false,
      selectedBot: null
    })
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

  botOrNot = () => {
    if (this.state.botSelected) {
      const enlisted = this.state.myBots.includes(this.state.selectedBot)
      return <BotSpecs enlisted={enlisted} enlist={this.addBot} return={this.reset} bot={this.state.selectedBot} />
    } else {
      return <BotCollection destroy={this.decomissionBot} click={this.showBotDetails} bots={this.state.bots} />
    }
  }

  render() {
    return (
            <div>
              <YourBotArmy destroy={this.decomissionBot} click={this.removeBot} bots={this.state.myBots} />
              {this.botOrNot()}
            </div>
    )}                           // ^^ botOrNot conditionally displays BotSpecs pane or all view pane   React Router would be superior
}

export default BotsPage;
