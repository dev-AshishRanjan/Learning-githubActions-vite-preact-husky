import { useState } from "preact/hooks";
const Todo = () => {
  const [data, setData] = useState([]);
  const [input, setInput] = useState();
  const onSubmitFn = (e) => {
    e.preventDefault();
    setData((prev) => {
      return [...prev, input];
    });
    setInput("");
  };

  const onInputFn = (e) => {
    const { value } = e.target;
    setInput(value);
  };
  return (
    <div class="todo">
      <div class="render">
        {data.length > 0 &&
          data.map((ele, index) => {
            return (
              <div class="element" key={index}>
                {ele}
              </div>
            );
          })}
      </div>
      <form onSubmit={onSubmitFn}>
        <input type="text" value={input} onInput={onInputFn} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Todo;
