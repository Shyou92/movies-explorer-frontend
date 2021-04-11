function Profile({ onHandleLogout, userData }) {
  return (
    <div className='profile'>
      <h1 className='profile__greeting'>Привет, Александр!</h1>

      <form className='profile-form'>
        <section className='profile-form__section'>
          <label htmlFor='profile-form-name' className='profile-form__label'>
            Имя
          </label>
          <input
            type='text'
            id='profile-form-name'
            className='profile-form__input'
            defaultValue='Alexander'
          />
          <span className='profile-form__input_error'>
            Что-то пошло не так...
          </span>
        </section>
        <hr className='profile-form__line' />
        <section className='profile-form__section'>
          <label htmlFor='profile-form-email' className='profile-form__label'>
            E-mail
          </label>
          <input
            type='email'
            id='profile-form-email'
            className='profile-form__input'
            defaultValue='pochta@yandex.ru'
          />
          <span className='profile-form__input_error'></span>
        </section>
      </form>

      <button className='profile__edit-button'>Редактировать</button>
      <button className='profile__logout-button' onClick={onHandleLogout}>
        Выйти из аккаунта
      </button>
    </div>
  );
}

export default Profile;
