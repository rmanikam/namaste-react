import { useState } from "react";

const User = ({ name }) => {
  const count = useState(0);
  const count2 = useState(2);

  return (
    <div className="user-card">
      <h2>Count = {count}</h2>
      <h2>Count2 = {count2}</h2>
      <h2>Name: {name}</h2>
      <h3>Location: Mohali</h3>
      <h4>Contact: sahiraman7@gmail.com</h4>
    </div>
  );
};

export default User;
