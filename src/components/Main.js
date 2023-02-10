import React, { Component } from 'react';

import Header from './header';
import Form from './Form';
import Tarefas from './Tarefas';
import Camisas from './Camisas';
import Footer from './footer';
// tarefas

import './Main.css';

export default class Main extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    // eslint-disable-next-line react/no-unused-state
    novaTarefa: '',
    tarefas: [
    ],
    // eslint-disable-next-line react/no-unused-state
    index: -1,
  };

  componentDidMount() {
    const tarefas = JSON.parse(localStorage.getItem('tarefas'));

    if (!tarefas) return;

    this.setState({ tarefas });
  }

  componentDidUpdate(prevProps, prevState) {
    const { tarefas } = this.state;

    if (tarefas === prevState.tarefas) return;
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { tarefas, index } = this.state;
    let { novaTarefa } = this.state;
    novaTarefa = novaTarefa.trim();

    if (tarefas.indexOf(novaTarefa) !== -1) return;

    const novaTarefas = [...tarefas];

    if (index === -1) {
      this.setState({
        tarefas: [...novaTarefas, novaTarefa],
        novaTarefa: '',
      });
    } else {
      novaTarefas[index] = novaTarefa;

      this.setState({
        tarefas: [...novaTarefas],
        index: -1,
      });
    }
  };

  hendleChange = (e) => {
    this.setState({
      // eslint-disable-next-line react/no-unused-state
      novaTarefa: e.target.value,
    });
  };

  // eslint-disable-next-line class-methods-use-this
  handleEdit = (e, index) => {
    const { tarefas } = this.state;

    this.setState({
      // eslint-disable-next-line react/no-unused-state
      index,
      novaTarefa: tarefas[index],
    });
  };

  // eslint-disable-next-line class-methods-use-this
  handleDelete = (e, index) => {
    const { tarefas } = this.state;
    const novaTarefas = [...tarefas];
    novaTarefas.splice(index, 1);

    this.setState({
      tarefas: [...novaTarefas],
    });
  };

  render() {
    const { novaTarefa, tarefas } = this.state;
    return (
      <>
        <Header />
        <section>
          <div className="main">
            <h1>Lista das inscrição</h1>

            <Form
              handleSubmit={this.handleSubmit}
              hendleChange={this.hendleChange}
              novaTarefa={novaTarefa}
            />
            <Tarefas
              handleEdit={this.handleEdit}
              handleDelete={this.handleDelete}
              tarefas={tarefas}
            />
          </div>
          <div className="main">
            <h1>Lista das camisas</h1>
            <Camisas />
          </div>
        </section>
        <Footer />
      </>

    );
  }
}
