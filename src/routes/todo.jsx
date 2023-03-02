import { useState } from "preact/hooks";
const Todo = () => {
  const [input, setInput] = useState();
  const onSubmitFn = (e) => {
    alert("Submitted a todo");
    e.preventDefault();
  };

  const onInputFn = (e) => {
    const { value } = e.target;
    setInput(value);
  };
  return (
    <div class="todo">
      <form onSubmit={onSubmitFn}>
        <input type="text" value={input} onInput={onInputFn} />
        <p>You typed this value: {input}</p>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Todo;
