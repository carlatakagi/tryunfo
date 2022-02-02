import React from 'react';
import './Form.css';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    console.log(isSaveButtonDisabled);

    return (
      <form action="#">
        <label htmlFor="name-input">
          <p>Nome da Carta</p>
          <input
            id="nameInput"
            type="text"
            name="cardName"
            value={ cardName }
            data-testid="name-input"
            onChange={ onInputChange }
            required="required"
          />
        </label>

        <label htmlFor="description-input">
          <p>Descrição da carta</p>
          <textarea
            id="descInput"
            name="cardDescription"
            value={ cardDescription }
            data-testid="description-input"
            onChange={ onInputChange }
            required="required"
          />
        </label>

        <label htmlFor="attr1-input">
          <p>Defesa</p>
          <input
            id="attr1Input"
            type="number"
            name="cardAttr1"
            value={ cardAttr1 }
            min="1"
            max="90"
            data-testid="attr1-input"
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="attr2-input">
          <p>Ataque</p>
          <input
            id="attr2Input"
            type="number"
            name="cardAttr2"
            value={ cardAttr2 }
            min="1"
            max="90"
            data-testid="attr2-input"
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="attr3-input">
          <p>Recompensa</p>
          <input
            id="attr3Input"
            type="number"
            name="cardAttr3"
            value={ cardAttr3 }
            min="1"
            max="90"
            data-testid="attr3-input"
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="image-input">
          <p>Link da imagem</p>
          <input
            id="image"
            type="text"
            name="cardImage"
            value={ cardImage }
            data-testid="image-input"
            onChange={ onInputChange }
            required="required"
          />
        </label>

        <label htmlFor="rare-input">
          <p>Selecione a raridade</p>
          <select
            id="rareInput"
            name="cardRare"
            value={ cardRare }
            data-testid="rare-input"
            onChange={ onInputChange }
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>

        {/* se tem o trunfo (hasTrunfo - boolean), deve retornar o texto 'Você já tem um Super Trunfo em seu baralho' ao invés de mostar a label */}
        <label htmlFor="trunfo-input">
        { hasTrunfo ? <p>Você já tem um Super Trunfo em seu baralho</p>
          : {(
          <input
            id="trunfoInput"
            type="checkbox"
            name="cardTrunfo"
            checked={ cardTrunfo }
            data-testid="trunfo-input"
            onChange={ onInputChange }
          />
          Super Trunfo
        )}
        </label>

        <button
          id="saveButton"
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

// PropTypes.oneOfType => aprendi no esquenta do projeto 28/01/2022 que participei com a Tabata e o Asafe
Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  cardAttr2: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  cardAttr3: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
