import PropTypes from 'prop-types';
import s from './Filter.module.css';

const Filter = ({ value = '', onChangeFilter }) => {
  return (
    <>
      <label className={s.filterLabel}>
        Filter contacts by name
        <input
          className={s.filterInput}
          type="text"
          value={value}
          onChange={onChangeFilter}
        />
      </label>
    </>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
};

export default Filter;
