import React from 'react';
import PropTypes from 'prop-types';

import { FaEdit, FaWindowClose } from 'react-icons/fa';

import './Tarefas.css';

export default function Tarefas({
  tarefas, handleEdit, handleDelete,
}) {
  const totalTarefas = tarefas.length;
  const tarefasCompleted = tarefas.filter((item) => item.check).length;

  return (
    <>
      <header className="total-chek">
        <h3>
          Tarefas Criadas
          <span className="total">{totalTarefas}</span>
        </h3>
        <h4>
          Concluidas
          <span className="concluido">
            {tarefasCompleted}
            -
            de
            -
            {totalTarefas}
          </span>
        </h4>
      </header>
      <div className="cent">
        <ul className="tarefas">
          {tarefas.map((tarefa, index) => (
            <li key={tarefa}>
              <button type="submit" className="button">
                <input className="check" type="checkbox" name="" id="" />
              </button>
              {tarefa}
              <span>
                <FaEdit
                  onClick={(e) => handleEdit(e, index)}
                  className="edit"
                />
                <FaWindowClose
                  onClick={(e) => handleDelete(e, index)}
                  className="del"
                />
              </span>
            </li>
          ))}
        </ul>

      </div>

    </>
  );
}

Tarefas.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  tarefas: PropTypes.array.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
