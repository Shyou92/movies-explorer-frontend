import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className='notFound'>
      <h1 className='notFound__status'>404</h1>
      <p className='notFound__text'>Страница не найдена</p>
      <Link to='/'>
        <button className='notFound__button'>Назад</button>
      </Link>
    </div>
  );
}

export default NotFound;
