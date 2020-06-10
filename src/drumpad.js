import React from "react";

const activeStyle = {
  backgroundColor: "rgb(37,164,167,0.9)",
  boxShadow: "0 3px rgb(37,164,167,0.9)",
  height: 77,
  marginTop: 13
};

const inactiveStyle = {
  backgroundColor: "silver",
  marginTop: 10,
  boxShadow: "3px 3px 5px grey"
};

class Drumpad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      padStyle: inactiveStyle
    };
    this.playSound = this.playSound.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.activatePad = this.activatePad.bind(this);
  }
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }
  handleKeyPress(e) {
    if (e.keyCode === this.props.keyCode) {
      this.playSound();
    }
  }
  activatePad() {
    this.state.padStyle.backgroundColor === "rgb(37,164,167,0.9)"
      ? this.setState({
          padStyle: inactiveStyle
        })
      : this.setState({
          padStyle: activeStyle
        });
  }
  playSound(e) {
    const sound = document.getElementById(this.props.keyTrigger);
    sound.currentTime = 0;
    const playPromise = sound.play();
    if (playPromise !== undefined) {
      playPromise.then(_ => {}).catch(error => {});
    }
    this.activatePad();
    setTimeout(() => this.activatePad(), 100);
    this.props.updateDisplay(this.props.clipId.replace(/-/g, " "));
  }
  render() {
    return (
      <div
        id={this.props.clipId}
        onClick={this.playSound}
        className="drum-pad"
        style={this.state.padStyle}
      >
        <audio
          className="clip"
          id={this.props.keyTrigger}
          src={this.props.url}
          type="audio/mp3"
        />
        {this.props.keyTrigger}
      </div>
    );
  }
}

export default Drumpad;
