import Shimmer1 from "./Shimmer1";
import { useState, useEffect } from "react";
const MyComponent = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setInterval(function () {
      setLoading(false);
    }, 2000);

    return () => clearInterval(timer);
  }, []);
  return loading ? <Shimmer1 /> : <MyComponent />;
};

export default MyComponent;
