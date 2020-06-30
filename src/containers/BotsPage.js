import React, { Component } from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from './YourBotArmy'
import SortBar from "../components/SortBar";


class BotsPage extends Component {
  state = {
    bots: [],
    myArmy: [],
    sortBy: ""
  }

  componentDidMount() {
    fetch('http://localhost:6001/bots')
    .then(res => res.json())
    .then(bots => this.setState({ bots }))
  }

  recruitBot = (bot) => {
    this.setState({myArmy: [...this.state.myArmy, bot]})
  }


  releaseBot = (bot) => {
    const filteredBots = this.state.myArmy.filter((robot) => robot.id !== bot.id);

    this.setState({ myArmy: filteredBots });
  }

  handleSortBots = (event) => {
    console.log(event.target.value)
    this.setState({sortBy: event.target.value})
  }

  sortBotsBy = () => {
    let allBots = this.state.bots
    let sortedBots = [];
    switch (this.state.sortBy) {
      case 'health':
        sortedBots = allBots.sort((a,b) => a.health - b.health)
        break;
      case 'damage':
        sortedBots = allBots.sort((a,b) => a.damage - b.damage)
        break;
      case 'armor':
        sortedBots = allBots.sort((a,b) => a.armor - b.armor)
        break;
      default:
        sortedBots = allBots;
    }
    return sortedBots
  }

  dischargeBot = (bot) => {
    const filteredBots = this.state.bots.filter((robot) => robot.id !== bot.id);
    this.setState({ bots: filteredBots });


    const filteredArmy = this.state.myArmy.filter((robot) => robot.id !== bot.id);
    this.setState({ myArmy: filteredArmy });


    fetch(`http://localhost:6001/bots/${bot.id}`, {
      method: 'DELETE'
    })
  }

  render() {
    return (
      <div>
        <YourBotArmy myArmy={this.state.myArmy} handleClick={this.releaseBot} dischargeBot={this.dischargeBot}/>
        <SortBar sortBotsBy={this.sortBotsBy()} sortBy={this.state.sortBy} handleSortBots={this.handleSortBots} />
        <br></br>
        <BotCollection bots={this.state.bots} handleClick={this.recruitBot} dischargeBot={this.dischargeBot}/>
      </div>
    )
  }
}

export default BotsPage;
