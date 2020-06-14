import React, { Component } from 'react'
import FormComponent from "./components/form"
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <React.Fragment>
          <FormComponent/>
      </React.Fragment>

      );
  }
}
 
export default App;