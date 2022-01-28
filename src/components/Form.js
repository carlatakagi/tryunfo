import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="name-input">
          <p>Nome da Carta</p>
          <input type="text" data-testid="name-input" />
        </label>

        <label htmlFor="description-input">
          <p>Descrição da carta</p>
          <textarea data-testid="description-input" />
        </label>

        <label htmlFor="attr1-input">
          <p>Atributo 1</p>
          <input type="number" data-testid="attr1-input" />
        </label>

        <label htmlFor="attr2-input">
          <p>Atributo 2</p>
          <input type="number" data-testid="attr2-input" />
        </label>

        <label htmlFor="attr3-input">
          <p>Atributo 3</p>
          <input type="number" data-testid="attr3-input" />
        </label>

        <label htmlFor="image-input">
          <p>Link da imagem</p>
          <input type="text" data-testid="image-input" />
        </label>

        <label htmlFor="rare-input">
          <p>Selecione a raridade</p>
          <select data-testid="rare-input">
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>

        <label htmlFor="trunfo-input">
          <input type="checkbox" data-testid="trunfo-input" />
          Super Trunfo
        </label>

        <button data-testid="save-button" type="submit">Salvar</button>

      </form>
    );
  }
}

export default Form;
