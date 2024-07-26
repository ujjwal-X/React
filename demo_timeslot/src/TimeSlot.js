import React from "react";
import TimeSlot from "./TimeSlot";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hour: this.props.slot.hour,
      minute: this.props.slot.min,
      second: this.props.slot.sec,
      interval: 1,
    };
    this.intervalObj = undefined;
  }
  executeStopWatch = () => {
    var hh = this.state.hour;
    var min = this.state.minute;
    var sec = this.state.second;
    sec += 1;
    if (sec >= 60) {
      min += 1;
      sec = 0;
    }
    if (min >= 60) {
      hh += 1;
      min = 0;
    }
    this.setState({ hour: hh, minute: min, second: sec });
  };
  componentDidMount() {
    clearInterval(this.intervalObj);
  }
  changeInterval(event) {
    clearInterval(this.intervalObj);
    console.log(event.target.value);
    this.intervalObj = setInterval(
      this.executeStopWatch,
      event.target.value * 1000
    );
    this.setState({ interval: event.target.value * 1 });
  }

  addSlot = () => {
    var hour = this.hh.value * 1;
    var min = this.mm.value * 1;
    var sec = this.ss.value * 1;
    console.log("sdfjvsdjh");
    var obj = { hour: hour, min: min, sec: sec };
    console.log(obj);
    var arrSlots = this.state.slots;
    arrSlots.push(obj);
    this.setState({ slots: arrSlots });
  };
  render() {
    return (
      <>
        <b>Slot : {this.props.index}=</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <b>{this.state.hour}</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <b>{this.state.minute}</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <b>{this.state.hour}</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <select
          name=""
          onChange={this.changeInterval}
          value={this.state.interval}
          id=""
        >
          <option value="">1</option>
          <option value="">4</option>
          <option value="">6</option>
          <option value="">8</option>
          <option value="">10</option>
        </select>
      </>
    );
  }
}
export default TimeSlot;
