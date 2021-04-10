import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

function Signup({ onRegister }) {
  const [data, setData] = useState({
    firstName: '',
    email: '',
    password: '',
  });
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(data)
      .then((res) => {
        return res;
      })
      .then(() => history.push('/movies'))
      .catch((err) => console.log(`Ошибка ${err.status}: ${err.message}`));
  };
  return (
    <div className='signup' onSubmit={handleSubmit}>
      <form className='auth-form'>
        <section className='auth-form__section'>
          <label htmlFor='auth-form-name' className='auth-form__label'>
            Имя
          </label>
          <input
            onChange={handleChange}
            name='firstName'
            type='text'
            id='auth-form-name'
            className='auth-form__input'
            defaultValue={data.firstName}
          />

          <span className='auth-form__input_error'></span>
        </section>
        <section className='auth-form__section'>
          <label htmlFor='auth-form-email' className='auth-form__label'>
            E-mail
          </label>
          <input
            onChange={handleChange}
            name='email'
            type='email'
            id='auth-form-email'
            className='auth-form__input'
            defaultValue={data.email}
          />

          <span className='auth-form__input_error'></span>
        </section>
        <section className='auth-form__section'>
          <label htmlFor='auth-form-password' className='auth-form__label'>
            Пароль
          </label>
          <input
            onChange={handleChange}
            name='password'
            type='password'
            id='auth-form-password'
            className='auth-form__input'
            defaultValue={data.password}
          />

          <span className='auth-form__input_error'></span>
        </section>
        <button
          className='auth-form__submit auth-form__submit_login'
          type='submit'
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
