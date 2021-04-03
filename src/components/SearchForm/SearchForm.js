import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return (
    <>
      <section className='search'>
        <input
          type='text'
          className='search__input'
          placeholder='Фильм'
          required
        />
        <button type='submit' className='search__button'>
          Найти
        </button>
        <span className='search__input-error'></span>
      </section>

      <FilterCheckbox />
    </>
  );
}

export default SearchForm;
