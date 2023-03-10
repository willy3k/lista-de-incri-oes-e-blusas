import React from 'react';
import PropTypes from 'prop-types';
import { FaPlus } from 'react-icons/fa';

import './Form.css';

export default function Form({
  handleSubmit, hendleChange, novaTarefa,
}) {
  return (
    <form onSubmit={handleSubmit} action="#" className="form">
      <input
        onChange={hendleChange}
        placeholder="Adicioner uma nova tarefa"
        type="text"
        value={novaTarefa}
      />
      <button type="submit">
        <FaPlus />
      </button>
    </form>
  );
}

Form.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  handleSubmit: PropTypes.func.isRequired,
  hendleChange: PropTypes.func.isRequired,
  novaTarefa: PropTypes.string.isRequired,
};
