import logo from './logo.svg';
import './App.css';
import Display from './components/Display';
import { Component } from 'react';


class App extends Component {
  render(){
    return(
      <fieldset>
      <legend>App.js</legend>
      <Display firstName="Jane" lastName="Doe" age={45} hairColor="Black" />
      <Display firstName="John" lastName="Smith" age={88} hairColor="Brown" />
      <Display firstName="Millard" lastName="Fillmore" age={50} hairColor="Brown" />
      <Display firstName="Maria" lastName="Smith" age={62} hairColor="Brown" />
      </fieldset>
    );
  }
}

export default App;
