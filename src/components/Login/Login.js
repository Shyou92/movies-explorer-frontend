import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

function Login({ onLogin }) {
  const [data, setData] = useState({
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
    onLogin(data)
      .then((res) => {
        return res;
      })
      .then(() => history.push('/movies'))
      .catch((err) => console.log(`Ошибка ${err.status}: ${err.message}`));
  };
  return (
    <div className='login' onSubmit={handleSubmit}>
      <form className='auth-form'>
        <section className='auth-form__section'>
          <label htmlFor='auth-form-email' className='auth-form__label'>
            E-mail
          </label>
          <input
            onChange={handleChange}
            type='email'
            name='email'
            id='auth-form-email'
            className='auth-form__input'
            defaultValue={data.email}
          />
          <span className='auth-form__input_error'>Что-то пошло не так...</span>
        </section>
        <section className='auth-form__section'>
          <label htmlFor='auth-form-password' className='auth-form__label'>
            Пароль
          </label>
          <input
            onChange={handleChange}
            type='password'
            name='password'
            id='auth-form-password'
            className='auth-form__input'
            defaultValue={data.password}
          />
          <span className='auth-form__input_error'></span>
        </section>
        <button className='auth-form__submit'>Войти</button>
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
