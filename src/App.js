import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [ personsState, setPersonsState ] = useState({
    persons: [
      { name: 'Shreyans', age: 21 },
      { name: 'Max', age: 26 },
      { name: 'Steph', age: 28 }
    ]
  });

  const [otherState, setOtherState] = useState('some other value');

  console.log(personsState, otherState);

  const switchNameHandler = (newName) => {
    //console.log('Was clicked');
    // DONT DO THIS: this.state.persons[0].name = "Shreyans Rishi";
    setPersonsState( {
      persons: [
        { name: newName, age: 21 },
        { name: 'Max', age: 26 },
        { name: 'Steph', age: 27 }
    ]
  } );
  }

  const nameChangeHandler = (event) => {
    setPersonsState( {
      persons: [
        { name: 'Shreyans', age: 21 },
        { name: event.target.value, age: 26 },
        { name: 'Steph', age: 27 }
    ]
    });
  }


  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  };

  return (

    <div className="App">
      <h1> Hi, I'm a React App</h1>
      <p>This is really working!</p>
      <button style={style}onClick={() => switchNameHandler('Shreyans Rishi')}> Switch Name </button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age}  > My Hobbies: Coding </Person>
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age} click={switchNameHandler.bind(this, 'Shreyans')} changed={nameChangeHandler} />
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
    </div>
  );

  //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App'));
}


export default app;
