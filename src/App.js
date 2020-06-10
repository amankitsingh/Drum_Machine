import React from "react";

import PadBank from "./padbank";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: String.fromCharCode(160),
      currentPadBank: bankOne
    };
    this.displayClipName = this.displayClipName.bind(this);
    this.clearDisplay = this.clearDisplay.bind(this);
  }
  displayClipName(name) {
    this.setState({
      display: name
    });
  }

  clearDisplay() {
    this.setState({
      display: String.fromCharCode(160)
    });
  }
  render() {
    return (
      <div id="drum-machine" className="inner-container">
        <PadBank
          updateDisplay={this.displayClipName}
          currentPadBank={this.state.currentPadBank}
        />
        <div className="controls-container">
          <p id="display">{this.state.display}</p>
        </div>
      </div>
    );
  }
}
export default App;

const bankOne = [
  {
    keyCode: 81,
    keyTrigger: "Q",
    id: "Heater-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
  },
  {
    keyCode: 87,
    keyTrigger: "W",
    id: "Heater-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
  },
  {
    keyCode: 69,
    keyTrigger: "E",
    id: "Heater-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
  },
  {
    keyCode: 65,
    keyTrigger: "A",
    id: "Heater-4",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
  },
  {
    keyCode: 83,
    keyTrigger: "S",
    id: "Clap",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
  },
  {
    keyCode: 68,
    keyTrigger: "D",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
  },
  {
    keyCode: 90,
    keyTrigger: "Z",
    id: "Kick-n'-Hat",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
  },
  {
    keyCode: 88,
    keyTrigger: "X",
    id: "Side-Stick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"
  },
  {
    keyCode: 67,
    keyTrigger: "C",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
  }
];
