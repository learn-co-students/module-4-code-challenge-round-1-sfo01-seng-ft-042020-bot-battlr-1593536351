import React, { Component } from "react";
import BotCard from '../components/BotCard'

class YourBotArmy extends Component {
  //your bot army code here...
  constructor(props) {
    super(props)
  
    this.state = {
    
      botArmy: []
    }
  }

  

  handleClick = (e) => {
    this.setState({
      botArmy: this.state.botArmy.push(e)
    })
  }
  

  render() {
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div  className="row bot-army-row">
            
            {this.props.bots.map((bot) => {
             <BotCard handleClick={e => this.handleClick(e)}  key={bot.id} bot={bot} /> 
          })}
            {this.state.botArmy}
          </div>
        </div>
      </div>
    );
  }
}

export default YourBotArmy;
