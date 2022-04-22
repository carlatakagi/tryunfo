import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

class Card extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo } = this.props;

    return (
      <div className="cards">

        <div className="card-box">
          <h1 className="card-title">WANTED</h1>
          <img
            className="card-image"
            name="image"
            src={ cardImage }
            alt={ cardName }
            data-testid="image-card"
          />

          <h2 name="name" data-testid="name-card">{ cardName }</h2>

          <p
            name="description"
            data-testid="description-card"
          >
            { `Descrição: ${cardDescription}` }
          </p>

          <p name="attr1" data-testid="attr1-card">{ `Defesa: ${cardAttr1}` }</p>

          <p name="attr2" data-testid="attr2-card">{ `Ataque: ${cardAttr2}` }</p>

          <p
            name="attr3"
            data-testid="attr3-card"
          >
            { `Recompensa: ฿ ${cardAttr3}.000.000,00` }
          </p>

          <p
            name="rare"
            data-testid="rare-card"
          >
            { `Este personagem é ${cardRare}` }

          </p>

          {/* https://pt-br.reactjs.org/docs/conditional-rendering.html */}
          { cardTrunfo ? <p data-testid="trunfo-card">Super Trunfo</p> : <p />}

        </div>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  cardAttr2: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  cardAttr3: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
