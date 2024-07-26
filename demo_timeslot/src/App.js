import React from "react";
import TimeSlot from "./TimeSlot";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      slots: [],
    };
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
        <input type="text" ref={(c) => (this.hh = c)} placeholder="Hour" />{" "}
        &nbsp;&nbsp;
        <input
          type="text"
          ref={(c) => (this.mm = c)}
          placeholder="Minute"
        />{" "}
        &nbsp;&nbsp;
        <input
          type="text"
          ref={(c) => (this.ss = c)}
          placeholder="Second"
        />{" "}
        &nbsp;&nbsp;
        <button onClick={this.addSlot}>Add Slot</button>
        <hr />
        {this.state.slots.map((slotData, index) => {
          return <TimeSlot slot={slotData} index={index + 1} />;
        })}
      </>
    );
  }
}
export default App;
