import React from 'react';
// import logo from './logo.svg';
import './App.css';
import ComponentHeader from './js/components/header'
import ComponentBody from './js/components/content'
import ComponentFooter from './js/components/footer'

class App extends React.Component{
  componentWillMount(){
      console.log('app-componentwillmount')
  }
  componentDidMount(){
      console.log('app-componentdidmount')
  }
  render(){
    return (
      <div className="App">
        <ComponentHeader></ComponentHeader>
        <ComponentBody userid={1234}></ComponentBody>
        <ComponentFooter></ComponentFooter>
      </div>
    );
  }
}

export default App;
