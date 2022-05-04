import logo from '../images/header__logo.svg';

export function Header(){
  return ( 
  <header className="header">
    <a className="header__logo-link" href="#">
        <img className="header__logo" src={logo} alt="Логотип" />
    </a>
  </header>)
};