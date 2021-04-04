import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({
  handleSubmit,
  handleMovieInput,
  movieSearch,
  movieSearchError,
}) {
  return (
    <>
      <section className='search'>
        <form className='search__form' onSubmit={handleSubmit} noValidate>
          <input
            type='text'
            name='movie'
            className='search__input'
            placeholder='Фильм'
            value={movieSearch}
            onChange={handleMovieInput}
            required
          />
          <button type='submit' className='search__button'>
            Найти
          </button>
          <span className='search__input-error'>{movieSearchError}</span>
        </form>
      </section>

      <FilterCheckbox />
    </>
  );
}

export default SearchForm;
