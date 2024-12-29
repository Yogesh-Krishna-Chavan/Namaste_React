// Functional component
import { useState } from "react";

const User = ({ name }) => {
  const [count] = useState(0);

  return (
    <div className="user-Card">
      {/* <h2>Name: Yogesh</h2> */}
      <h1>Count: {count}</h1>
      <h2>Name: {name}</h2>
      <h3>Location: 🏡Pune</h3>
      <h3>Contact: 📞9405636464</h3>
    </div>
  );
};

export default User;
