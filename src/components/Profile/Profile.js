import React from 'react';
import { useState, useEffect } from 'react';

function Profile({ onHandleLogout, onHandleUpdateUserInfo, currentUser }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [nameIsValid, setNameIsValid] = useState(false);
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  useEffect(() => {
    if (!currentUser.name || !currentUser.email) {
      currentUser.email = 'подгружаем данные...';
      currentUser.name = 'подгружаем данные...';
    }
    setEmail(currentUser.email);
    setName(currentUser.name);
  }, [currentUser]);

  useEffect(() => {
    if (emailIsValid && nameIsValid) {
      setButtonDisabled(false);
    } else if (email === currentUser.email && name === currentUser.name) {
      setButtonDisabled(true);
    } else {
      setButtonDisabled(true);
    }
    return buttonDisabled;
  }, [
    name,
    email,
    currentUser.email,
    currentUser.name,
    emailIsValid,
    nameIsValid,
    buttonDisabled,
  ]);

  const onEmailHanlder = (e) => {
    setEmail(e.target.value);
    const emailRegExp = /[a-z0-9]+@[a-z0-9]+\.[a-z0-9]+/;

    if (
      !emailRegExp.test(String(e.target.value).toLowerCase()) &&
      e.target.value.length >= 2
    ) {
      setEmailIsValid(false);
    } else if (e.target.value.length === 0) {
      setEmailIsValid(false);
    } else {
      setEmailIsValid(true);
    }
  };

  const onNameHandler = (e) => {
    setName(e.target.value);

    const nameRegExp = /^([a-zA-Zа-яА-я]{2,}\s[a-zA-Zа-яА-Я]{1,}'?-?[a-zA-Zа-яА-Я]{2,}\s?([a-zA-Zа-яА-Я]{1,})?)/;

    if (
      !nameRegExp.test(String(e.target.value).toLowerCase()) &&
      e.target.value.length >= 2
    ) {
      setNameIsValid(false);
    } else if (e.target.value.length === 0) {
      setNameIsValid(false);
    } else {
      setNameIsValid(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onHandleUpdateUserInfo({ name, email });
  };

  return (
    <div className='profile'>
      <h1 className='profile__greeting'>Привет, {currentUser.name}!</h1>

      <form className='profile-form' onSubmit={handleSubmit}>
        <section className='profile-form__section'>
          <label htmlFor='profile-form-name' className='profile-form__label'>
            Имя
          </label>
          <input
            type='text'
            name='name'
            value={name}
            id='profile-form-name'
            className='profile-form__input'
            placeholder='Ваше имя'
            onChange={onNameHandler}
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
            name='email'
            value={email}
            id='profile-form-email'
            className='profile-form__input'
            placeholder='Ваш email'
            onChange={onEmailHanlder}
          />
          <span className='profile-form__input_error'></span>
        </section>
        <button
          className={`profile__edit-button ${
            buttonDisabled ? 'profile__edit_button_disabled' : ''
          } `}
          type='submit'
          // disabled={buttonDisabled}
        >
          Редактировать
        </button>
      </form>

      <button className='profile__logout-button' onClick={onHandleLogout}>
        Выйти из аккаунта
      </button>
    </div>
  );
}

export default Profile;
