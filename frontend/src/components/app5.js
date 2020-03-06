import React from 'react';
import DateCountdown from 'react-date-countdown-timer';



function App() {
  return (
    <div className="App">
      <DateCountdown dateTo='2023-03-03 22:00' callback={()=>alert('Expired')} mostSignificantFigure='day'  />;
      <DateCountdown dateTo='2028-03-03 22:00' callback={()=>alert('Expired')} mostSignificantFigure='day'  />;
      <DateCountdown dateTo='2021-03-03 22:00' callback={()=>alert('Expired')} mostSignificantFigure='day'  />;
    </div>
  );
}

export default App;
const container = document.getElementById("app");
render(<App />, container);
