import { useState } from 'react';
import { Link } from 'react-router-dom';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUserNameInput = (e) => {
    setName(e.target.value);
  };

  const handleUserEmailInput = (e) => {
    setEmail(e.target.value);
  };

  const handleUserPasswordInput = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div className='signup'>
      <form className='auth-form'>
        <section className='auth-form__section'>
          <label htmlFor='auth-form-name' className='auth-form__label'>
            Имя
          </label>
          <input
            onChange={handleUserNameInput}
            name='firstName'
            type='text'
            id='auth-form-name'
            className='auth-form__input'
            value={name}
          />

          <span className='auth-form__input_error'></span>
        </section>
        <section className='auth-form__section'>
          <label htmlFor='auth-form-email' className='auth-form__label'>
            E-mail
          </label>
          <input
            onChange={handleUserEmailInput}
            name='email'
            type='email'
            id='auth-form-email'
            className='auth-form__input'
            value={email}
          />

          <span className='auth-form__input_error'></span>
        </section>
        <section className='auth-form__section'>
          <label htmlFor='auth-form-password' className='auth-form__label'>
            Пароль
          </label>
          <input
            onChange={handleUserPasswordInput}
            name='password'
            type='password'
            id='auth-form-password'
            className='auth-form__input'
            value={password}
          />

          <span className='auth-form__input_error'></span>
        </section>
        <Link to='signup'>
          <button className='auth-form__submit auth-form__submit_login'>
            Зарегистрироваться
          </button>
        </Link>
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
