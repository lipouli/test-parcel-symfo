import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './app.styl';

/**
 * L'application simule un lancé de dé.
 */
class App extends React.Component {
  state = {
    toc: null,
  };

  componentWillMount() {
    axios.get('/data')
      .then(({ data }) => {
        const arrayData = Object.keys(data);
        const dataData = arrayData.map(element => <p key={data[element]}>{data[element]}</p>);
        this.setState({
          toc: dataData,
        });
      });
  }

  render() {
    const {
      diceFacesNb,
      randomValue,
      generateRandomValue,
    } = this.props;
    return (
      <div>
        version avec route data : {this.state.toc}
        <h1>{`D${diceFacesNb}`}</h1>
        <p className="message">
          {randomValue}
          <br />
          <button onClick={generateRandomValue}>Lancer le dé !</button>
        </p>
      </div>
    );
  }
}

App.propTypes = {
  diceFacesNb: PropTypes.number.isRequired,
  randomValue: PropTypes.number,
  generateRandomValue: PropTypes.func.isRequired,
};

App.defaultProps = {
  randomValue: 0,
};

export default App;
