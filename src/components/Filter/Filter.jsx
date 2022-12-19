import css from './Filter.module.css';

const Filter = ({ onChange, value }) => {
  return (
    <>
      <label className={css.title}>
        Find contacts by name
        <input
          className={css.input}
          type="text"
          value={value}
          onChange={onChange}
        />
      </label>
    </>
  );
};

export default Filter;
