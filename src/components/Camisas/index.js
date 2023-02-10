import React, { Component } from 'react';
import { FaPlus, FaWindowClose, FaEdit } from 'react-icons/fa';
import './Camisas.css';

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
    const tarefas = JSON.parse(localStorage.getItem('camisas'));

    if (!tarefas) return;

    this.setState({ tarefas });
  }

  componentDidUpdate(prevProps, prevState) {
    const { tarefas } = this.state;

    if (tarefas === prevState.tarefas) return;
    localStorage.setItem('camisas', JSON.stringify(tarefas));
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
        <form action="#" onSubmit={this.handleSubmit} className="form">
          <input type="text" onChange={this.hendleChange} value={novaTarefa} />
          <button type="submit">
            <FaPlus />
          </button>

        </form>
        <ul className="tarefas">
          {tarefas.map((tarefa, index) => (
            <li key={tarefa}>
              {tarefa}
              <span>
                <FaEdit
                  className="edit"
                  onClick={(e) => this.handleEdit(e, index)}
                />
                <FaWindowClose
                  className="del"
                  onClick={(e) => this.handleDelete(e, index)}
                />
              </span>
            </li>
          ))}
        </ul>

      </>
    );
  }
}
