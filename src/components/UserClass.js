//Class component
import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    const { name } = this.props;
    const { count } = this.state;
    return (
      <div className="user-Card">
        {/* <h2>Name: Yogiraj</h2> */}
        <h1>Count: {count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count Increase
        </button>
        <h2>Name: {name}</h2>
        <h3>Location: 🏡Malvan</h3>
        <h3>Contact: 📞8805636464</h3>
      </div>
    );
  }
}

export default UserClass;
