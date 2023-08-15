import { useState } from 'react';

function App() {
  const [val, setVal] = useState('test');
  const test = () => {
    window.alert('test');
  };
  return (
    <>
      <input
        type="text"
        value={val}
        onChange={(e) => {
          setVal(e.currentTarget.value);
        }}
      />
      <wc-text>{val}</wc-text>
      <wc-text>test</wc-text>
      <wc-header onClick={test}>Words 123</wc-header>
      <wc-header onClick={test}>Words {val}</wc-header>
    </>
  );
}

export default App;
