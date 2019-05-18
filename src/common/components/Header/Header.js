import React from 'react';
import { Logotype } from '../Logotype';
import { Menu } from '../Menu';
import { Button } from '../Button';
import { Input } from '../Input';
import './styles/header.scss';
import './styles/main.scss';

function Header() {
  return (
    <header className="header">
      <nav aria-label="navigation-main">
        <Logotype />
        <Menu />
      </nav>
      <section className="main__search">
        <h1>Where do you want to go today?</h1>
        <div className="main__container">
          <Input
            ariaLabel='search'
            id='search'
            name='search'
            onChange=""
            value=""
          />
          <Button
            alt='search'
            className='button__search'
            onClick=""
          />
        </div>
      </section>
    </header>
  )
}

export { Header };
