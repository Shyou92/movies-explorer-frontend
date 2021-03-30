import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className='login'>
      <form className='auth-form'>
        <section className='auth-form__section'>
          <label htmlFor='auth-form-email' className='auth-form__label'>
            E-mail
          </label>
          <input
            type='email'
            id='auth-form-email'
            className='auth-form__input'
          />
          <span className='auth-form__input_error'>Что-то пошло не так...</span>
        </section>
        <section className='auth-form__section'>
          <label htmlFor='auth-form-password' className='auth-form__label'>
            Пароль
          </label>
          <input
            type='password'
            id='auth-form-password'
            className='auth-form__input'
          />
          <span className='auth-form__input_error'></span>
        </section>
        <Link to='signin'>
          <button className='auth-form__submit'>Войти</button>
        </Link>
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
