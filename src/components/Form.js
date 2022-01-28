import React from 'react';
import './Form.css';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, /* hasTrunfo */isSaveButtonDisabled,
      onInputChange, onSaveButtonClick } = this.props;

    return (
      <form>
        <label htmlFor="name-input">
          <p>Nome da Carta</p>
          <input
            type="text"
            name="name"
            value={ cardName }
            data-testid="name-input"
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="description-input">
          <p>Descrição da carta</p>
          <textarea
            name="description"
            value={ cardDescription }
            data-testid="description-input"
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="attr1-input">
          <p>Defesa</p>
          <input
            type="number"
            name="attr1"
            value={ cardAttr1 }
            data-testid="attr1-input"
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="attr2-input">
          <p>Ataque</p>
          <input
            type="number"
            name="attr2"
            value={ cardAttr2 }
            data-testid="attr2-input"
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="attr3-input">
          <p>Estratégia</p>
          <input
            type="number"
            name="attr3"
            value={ cardAttr3 }
            data-testid="attr3-input"
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="image-input">
          <p>Link da imagem</p>
          <input
            type="text"
            name="image"
            value={ cardImage }
            data-testid="image-input"
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="rare-input">
          <p>Selecione a raridade</p>
          <select value={ cardRare } data-testid="rare-input" onChange={ onInputChange }>
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>

        <label htmlFor="trunfo-input">
          <input
            type="checkbox"
            name="trunfo-input"
            checked={ cardTrunfo }
            data-testid="trunfo-input"
            onChange={ onInputChange }
          />
          Super Trunfo
        </label>

        <button
          data-testid="save-button"
          type="submit"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>

      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
