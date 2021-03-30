function FilterCheckbox() {
  return (
    <>
      <section className='search-short-movies'>
        <label class='search-short-movies__switch'>
          <input className='search-short-movies__input' type='checkbox' />
          <span class='slider round'></span>
        </label>
        <p className='search-short-movies__text'>Короткометражки</p>
      </section>
      <hr className='separate__line' />
    </>
  );
}

export default FilterCheckbox;
