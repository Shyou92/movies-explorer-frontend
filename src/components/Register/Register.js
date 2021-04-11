import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

function Signup({ onRegister, signedIn }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nameIsValid, setNameIsValid] = useState(false);
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const history = useHistory();

  const handleName = (e) => {
    setName(e.target.value);
    if (signedIn) {
      setNameIsValid(true);
    } else if (e.target.value === '') {
      setNameError("Поле 'Имя' должно быть заполнено");
      setNameIsValid(false);
    } else if (e.target.value.length < 2) {
      setNameError("Поле 'Имя' должно содержать хотя бы 2 символа");
      setNameIsValid(false);
    } else {
      setNameError('');
      setNameIsValid(true);
    }
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    const mailRegExp = /[a-z0-9]+@[a-z0-9]+\.[a-z0-9]+/;
    if (
      !mailRegExp.test(String(e.target.value).toLowerCase()) &&
      e.target.value.length >= 1
    ) {
      setEmailError('Некорректный email');
      setEmailIsValid(false);
    } else if (e.target.value === '') {
      setEmailError("Поле 'Email' должно быть заполнено");
      setEmailIsValid(false);
    } else {
      setEmailError('');
      setEmailIsValid(true);
    }
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 8 && e.target.value.length >= 1) {
      setPasswordError('Пароль должен быть длиной от 8 символов');
      setPasswordIsValid(false);
    } else if (e.target.value === '') {
      setPasswordError("Поле 'Пароль' должно быть заполнено");
      setPasswordIsValid(false);
    } else {
      setPasswordError('');
      setPasswordIsValid(true);
    }
  };

  const submitRegistration = () => {
    if (nameIsValid && emailIsValid && passwordIsValid) {
      setButtonDisabled(false);
      return buttonDisabled;
    } else {
      setButtonDisabled(true);
      return buttonDisabled;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      password,
    };
    onRegister(data)
      .then((res) => {
        return res;
      })
      .then(() => history.push('/movies'))
      .catch((err) => console.log(`Ошибка ${err.status}: ${err.message}`));
  };
  return (
    <div className='signup'>
      <form
        className='auth-form'
        onChange={submitRegistration}
        onSubmit={handleSubmit}
      >
        <section className='auth-form__section'>
          <label htmlFor='auth-form-name' className='auth-form__label'>
            Имя
          </label>
          <input
            onChange={handleName}
            name='firstName'
            type='text'
            id='auth-form-name'
            className='auth-form__input'
            defaultValue={name}
          />

          <span
            className={`auth-form__input_error ${
              nameIsValid ? '' : 'auth-form__input_error-active'
            } `}
          >
            {nameError}
          </span>
        </section>
        <section className='auth-form__section'>
          <label htmlFor='auth-form-email' className='auth-form__label'>
            E-mail
          </label>
          <input
            onChange={handleEmail}
            name='email'
            type='email'
            id='auth-form-email'
            className='auth-form__input'
            defaultValue={email}
          />

          <span
            className={`auth-form__input_error ${
              emailIsValid ? '' : 'auth-form__input_error-active'
            } `}
          >
            {emailError}
          </span>
        </section>
        <section className='auth-form__section'>
          <label htmlFor='auth-form-password' className='auth-form__label'>
            Пароль
          </label>
          <input
            onChange={handlePassword}
            name='password'
            type='password'
            id='auth-form-password'
            className='auth-form__input'
            defaultValue={password}
          />

          <span
            className={`auth-form__input_error ${
              passwordIsValid ? '' : 'auth-form__input_error-active'
            } `}
          >
            {passwordError}
          </span>
        </section>
        <button
          className={`auth-form__submit auth-form__submit_login ${
            nameIsValid && emailIsValid && passwordIsValid
              ? ''
              : 'auth-form__submit_disabled'
          }`}
          type='submit'
          disabled={
            nameIsValid && emailIsValid && passwordIsValid ? false : true
          }
        >
          Зарегистрироваться
        </button>
        <p className='auth-form__register-text'>
          Уже зарегистрированы?
          <Link className='auth-form__register-link' to='signin'>
            Войти
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Signup;
