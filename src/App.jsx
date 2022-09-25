const slot_algo = () => {
  let x = '👑';
  let y = '👑';
  let z = '✅';

  if (x === y && y === z) {
    return (
      <>
        <div className="slot_inner">
          <h1> {x} {y} {z} </h1>
          <hr />
          <h1>🎉 You won 🎉</h1>
        </div>
      </>
    );
  } else {

    return (
      <>
        <div className="slot_inner">
          <h1> {x} {y} {z} </h1>
          <hr />
          <h1>Not Matching</h1>
        </div>
      </>
    );

  }
};


const App = () => {

  return <>
    <h1 className="heading-style"> 🎰 Slot machine 🎰 </h1>

    <slot_algo />

  </>;
};

export default App;
