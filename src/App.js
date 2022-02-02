import React from 'react';
import './index.css';
import LogoOnePiece from './one-piece-logo.png';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      hasTrunfo: false,
      allCards: [],
    };

    // constante depois validar objeto - criada no constructor para ser utilizada globalmente
    this.validationObject = {
      cardName: false,
      cardDescription: false,
      cardAttr1: false,
      cardAttr2: false,
      cardAttr3: false,
      cardImage: false,
    };

    // constante para depois utilizar na soma dos atributos
    this.sumAttrObject = {
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
    };
  }

  // funcao de clicar no botao de salvar
  // implementar logica para salvar - dar um push - infos da const na lista - array - allCards
  onSaveButtonClick = () => {
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
      allCards,
    } = this.state;

    allCards.push({
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
    });

    // verifica se hastrunfo = false e cardtrunfo = verdadeiro e muda o estado de hastrunfo para true
    if (!hasTrunfo && cardTrunfo) {
      this.setState({
        hasTrunfo: true,
      });
    }

    // ao clicar retorna tudo vazio, cardRare normal
    // ao clicar no botão irá checar se existe algum trunfo na lista allcards
    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
    });
  }

  // funcao que muda o estado do objeto com nome e valor, tambem verifica se é do tipo checkbox
  onInputChange = ({ target }) => {
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    this.setState({
      [target.name]: value,
    });

    // irá verificar se o formulario é valido
    this.checkIfFormIsValid({
      value: target.value,
      type: target.type,
      name: target.name,
    });
  }

  // requisito 5 - caos e confusão, minha irmã me ajudou a resolver
  // funcao que valida se os atributos somados irão resultar no valor máximo de 210
  // pega os valores do objeto sumAttrObject e 'soma' com o reduce
  isSumAttrValid() {
    const MAX_ATTR_VALUE = 210;

    return Object.values(this.sumAttrObject)
      .reduce((total, value) => total + Number(value), 0) <= MAX_ATTR_VALUE;
  }

  // verifica se os valores dos atributos são de no máximo 90 cada um
  isValidInputNumber(value) {
    const MAX_VALUE = 90;

    return value >= 0 && value <= MAX_VALUE && this.isSumAttrValid();
  }

  // valida se existe algo dentro dos inputs text (cardname, etc) se nao existir, o text será uma string vazia
  // minha irmã me apresentou o método o trim() para remover espaços em branco (início ou fim)
  isValidInputText(text = '') {
    return text.trim().length > 0;
  }

  // funcao que valida se o input tem algo
  // se for do tipo number, a chave do objeto sumAttrObject recebe o valor numero
  // a chave do objeto validationObject
  checkIfInputIsValid({ value, type, name }) {
    if (type === 'number') {
      this.sumAttrObject[name] = Number(value);

      this.validationObject[name] = this.isValidInputNumber(Number(value));
    } else {
      this.validationObject[name] = this.isValidInputText(value);
    }
  }

  // funcao que valida se todos os inputs estão com informação
  // pega todos os valores do objeto validationObject e retorna se tudo for validado (true)
  // depois muda o state para o que não está válido ou está (true or false)
  checkIfFormIsValid({ value, type, name }) {
    this.checkIfInputIsValid({ value, type, name });

    const allInputsValid = Object.values(this.validationObject)
      .every((validation) => validation === true);

    this.setState({
      isSaveButtonDisabled: !allInputsValid,
    });
  }
  /* aqui termina o requisito 5 */

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
    } = this.state;

    return (
      <div>
        <header>
          <img className="logo-img" src={ LogoOnePiece } alt="logo one piece" />
          <h1 className="logo-title">Tryunfo</h1>
        </header>

        <div id="container-form-card">
          <div className="form-container">
            <Form
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardImage={ cardImage }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
              hasTrunfo={ hasTrunfo }
              onInputChange={ this.onInputChange }
              isSaveButtonDisabled={ isSaveButtonDisabled }
              onSaveButtonClick={ this.onSaveButtonClick }
            />
          </div>

          <div className="card-container">
            <Card
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardImage={ cardImage }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
