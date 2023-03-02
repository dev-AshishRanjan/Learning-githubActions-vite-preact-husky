import { useEffect, useState } from "preact/hooks";
const Home = () => {
  const [state, setState] = useState({});
  useEffect(() => {
    const data = navigator;
    console.log(data);
    setState(data);
  }, []);

  return (
    <div class="home">
      <div class="row">
        <p>Downlink : </p>
        <span>{state.connection && state.connection.downlink}</span>
      </div>
      <div class="row">
        <p>EffectiveType : </p>
        <span>{state.connection && state.connection.effectiveType}</span>
      </div>
      <div class="row">
        <p>Language : </p>
        <span>{state && state.language}</span>
      </div>
      <div class="row">
        <p>vendor : </p>
        <span>{state && state.vendor}</span>
      </div>
    </div>
  );
};

export default Home;
