import './App.css';
import RangePicker from './components';
import logo from './logo.svg';

const onDateSelect = (startDate, endDate) => {
  console.log(
      ' date selected: startDate => %s , endDate => %s',
      startDate,
      endDate
  );
};

const onClose = (startDate, endDate) => {
  console.log(
      ' ok/select:  startDate => %s , endDate => %s ',
      startDate,
      endDate
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <RangePicker
          onDateSelected={onDateSelect}
          defaultValue={{
            startDate: new Date(),
            endDate: ''
          }}
          onClose={onClose}
          // onOpen={() => console.log(' openend')}
          dateFormat="dd-MM-YYYY"
          // disableRange
          // rangeTillEndOfDay
          // selectTime
        />
        <p> React Js based date/range picker, unlike other range pickers it uses single calendar to select the range.</p>
        <p> Originally Developed By <a
        className="App-link"
        href="https://github.com/aadilhasan"
        target="_blank"
        rel="noopener noreferrer"
      >
      aadilhasan
      </a></p>
        
      <p>Forked By <a
        className="App-link"
        href="https://github.com/hakrnjn"
        target="_blank"
        rel="noopener noreferrer"
      >
      itDebojit
      </a> | React 18 Compatible</p>
      </header>
    </div>
  );
}

export default App;
