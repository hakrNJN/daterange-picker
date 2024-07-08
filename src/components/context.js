// import * as React from 'react';
// import { useState } from 'react';

// const Context = React.createContext({});

// const Provider = ({ children }) => {
//   const [state, setState] = useState({
//     today: new Date(),
//     startDate: null,
//     endDate: null,
//     startTime: null,
//     endTime: null
//   });

//   const updateContext = (partialState) => {
//     setState({ ...state, ...partialState });
//   };

//   return (
//     <Context.Provider value={{ ...state, updateContext }}>
//       {children}
//     </Context.Provider>
//   );
// };

// // Export the Context and Consumer
// export { Context as Consumer, Context, Provider };

import React from 'react';
const Context = React.createContext({});

export class Provider extends React.Component {
  state = {
    today: new Date(),
    startDate: null,
    endDate: null,
    startTime: null,
    endTime: null
  };
  updateContext = partialState => {
    this.setState({ ...this.state, ...partialState });
  };
  render() {
    return (
      <Context.Provider
        value={{ ...this.state, updateContext: this.updateContext }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;