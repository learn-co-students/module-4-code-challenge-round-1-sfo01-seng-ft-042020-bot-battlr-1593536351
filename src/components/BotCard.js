import React from "react";

const botTypeClasses = {
  Assault: "icon military",
  Defender: "icon shield",
  Support: "icon plus circle",
  Medic: "icon ambulance",
  Witch: "icon magic",
  Captain: "icon star"
};

const swapImage = (event) => {
  const imgs = ['/justin.jpg', '/oller.jpeg', '/campbell.jpeg']
  event.target.onError = null; //prevent infinite loop if below img src re-assignment fails
  const idx = ~~(Math.random() * imgs.length)
  event.target.src=imgs[idx] 
}

const BotCard = props => {
  return (
    <div className="ui column">
      <div
        className="ui card"
        key={props.bot.id}
        onClick={() => props.click(props.bot)}
      >
        <div className="image">
          <img alt="oh no!" src={props.bot.avatar_url} onError={(e) => swapImage(e)} />
        </div>
        <div className="content">
          <div className="header">
            {props.bot.name}
            <i className={botTypeClasses[props.bot.bot_class]} />
          </div>
          <div className="meta text-wrap">
            <small>{props.bot.catchphrase}</small>
          </div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat" />
            {props.bot.health}
          </span>

          <span>
            <i className="icon lightning" />
            {props.bot.damage}
          </span>
          <span>
            <i className="icon shield" />
            {props.bot.armor}
          </span>
          <span>
            <div className="ui center aligned segment basic">
              <button
                className="ui mini red button"
                onClick={(e) =>
                  props.destroy(e, props.bot.id)
                }
              >
                x
              </button>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default BotCard;
