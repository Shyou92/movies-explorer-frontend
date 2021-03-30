import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return (
    <>
      <section className='search'>
        <input type='text' className='search__input' placeholder='Фильм' />
        <button type='submit' className='search__button'>
          Найти
        </button>
      </section>

      <FilterCheckbox />
    </>
  );
}

export default SearchForm;
