import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
/*   constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { value } }) {
    this.setState({
      [name]: value,
    });
  } */

  render() {
    /* const { cardName, cardDescription } = this.props; */
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form />
        <Card />
      </div>
    );
  }
}

export default App;
