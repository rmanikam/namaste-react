import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 2,
      userInfo: {
        name: "Dummy Name",
        location: "Dummy Location",
      },
    };
    console.log(props);

    console.log(this.props.name + "Child Constructor");
  }

  async componentDidMount() {
    // API Call

    const data = await fetch("https:api.github.com/users/akshaymarch7");
    const json = await data.json();

    console.log(json);
    this.setState({
      userInfo: json,
    });

    this.timer = setinterval(() => {
      console.log("Namaste React Operation");
    }, 1000);

    console.log(this.props.name + "Child Component Did Mount");
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.count !== prevState.count) {
    }

    if (this.state.count2 !== prevState.count) {
    }
    console.log("Component Did Update");
  }

  componentWillUnmount() {
    console.log("Component Will Unmount");

    clearInterval(this.timer);
  }

  render() {
    // const { name, location, contact } = this.props;
    const { name, location } = this.state.userInfo;
    // const { count } = this.state;
    console.log(this.props.name + "Child Render");
    return (
      <div className="user-card">
        {/* <h2>Count: {count}</h2> */}
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        {/* <h4>Contact: {contact}</h4> */}
        {/* 
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
            this.setState({ count2: this.state.count2 + 1 });
          }}
        ></button> */}
      </div>
    );
  }
}

export default UserClass;

/***
 
* --- MOUNTING ---
*
* Constructor( dummy )
* render(dummy)
*  <HTML Dummy >
*  Component Did Mount
*  <API Call>
*  <this.setState>  -> State variable is updated

*  
*  --- UPDATE
*   render(API data)
*   <HTML(new API data)
*   component Did Update
*

 */
