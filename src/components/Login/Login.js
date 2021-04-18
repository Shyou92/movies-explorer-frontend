import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const history = useHistory();

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

  const submitLogin = () => {
    if (emailIsValid && passwordIsValid) {
      setButtonDisabled(false);
      return buttonDisabled;
    } else {
      setButtonDisabled(true);
      return buttonDisabled;
    }
  };

  function resetInputs() {
    setEmail('');
    setPassword('');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };
    onLogin(data)
      .then((res) => {
        return res;
      })
      .then(() => history.push('/movies'))
      .finally(() => resetInputs())
      .catch((err) => console.log(`Ошибка ${err.status}: ${err.message}`));
  };
  return (
    <div className='login'>
      <form
        className='auth-form'
        onSubmit={handleSubmit}
        onChange={submitLogin}
      >
        <section className='auth-form__section'>
          <label htmlFor='auth-form-email' className='auth-form__label'>
            E-mail
          </label>
          <input
            onChange={handleEmail}
            type='email'
            name='email'
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
            type='password'
            name='password'
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
          className={`auth-form__submit ${
            emailIsValid && passwordIsValid ? '' : 'auth-form__submit_disabled'
          }`}
          disabled={emailIsValid && passwordIsValid ? false : true}
        >
          Войти
        </button>
      </form>
      <p className='auth-form__register-text'>
        Еще не зарегистрированы?
        <Link className='auth-form__register-link' to='signup'>
          Регистрация
        </Link>
      </p>
    </div>
  );
}

export default Login;
