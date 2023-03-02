import { useState, useEffect } from "preact/hooks";
const Clock = () => {
  const [time, setTime] = useState("");
  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      console.log(date);
      setTime(
        `${
          date.getHours() % 12
        } : ${date.getMinutes()} : ${date.getSeconds()} ${
          date.getHours() > 12 ? "PM" : "AM"
        }`
      );
    });
  });
  return <div class="clock">{time}</div>;
};

export default Clock;
