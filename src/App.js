import React, { Component } from 'react';
import './estilo.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      textoFrase: '',

    };

    this.quebraBiscoito = this.quebraBiscoito.bind(this);

    this.frases = ['Para certas coisas, temos que ser surdos, cegos e mudos.',
      'As vezes as coisas demoram, mas acontecem. O importante é saber esperar e não perder a fé!',
      'Cuidado com as voltas que o mundo dá. Hoje você lança as palavras, amanhã sente o efeito delas.',
      'Aprenda a viver sem as pessoas que vivem sem você.', 'Cada escolha, uma oportunidade. Cada queda, um aprendizado. Cada atitude, uma consequência.']

  }

  quebraBiscoito() {
    let state = this.state;
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
    state.textoFrase = '"' + this.frases[numeroAleatorio] + '"';
    this.setState(state);
  }

  render() {
    return (
      <div className="container">
        <img src={require('./assets/biscoito.png')} className="img" />
        <Botao nome="Abrir biscoito" acaoBtn={this.quebraBiscoito} />
        <h3 className="texto-frase">{this.state.textoFrase}</h3>
      </div>
    );
  }
}

class Botao extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.acaoBtn}>{this.props.nome}</button>
      </div>
    );
  }
}

export default App;