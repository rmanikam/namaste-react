import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);

    console.log(this.props.name + "Parent Constructor");
  }

  componentDidMount() {
    console.log(this.props.name + "Parent Component Did Mount");
  }

  render() {
    console.log(this.props.name + "Parent Render");
    return (
      <>
        <h1>About</h1>
        <h2>This is Namaste React Series</h2>
        <User name={"Raman Sahi"} />
        {/* Now we are using 2 instances of the same class */}
        <UserClass
          name={"first"}
          location={"Mohali"}
          contact={"sahiraman7@gmail.com"}
        />
        <UserClass
          name={"second"}
          location={"US"}
          contact={"sahiraman7@gmail.com"}
        />
      </>
    );
  }
}

/*  
  -Parent constructor
  -Parent render


  - First Constructor
  - First Render

  - Second Constructor
  - Second render

  - First ComponentDidMount
  - Second ComponentDid Mount

  - Parent Component Did Mount


*/

export default About;
