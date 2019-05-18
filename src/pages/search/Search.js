import React from 'react';
import { Header } from '../../common/components/Header';
import { Property } from  './Property';
import './styles/styles.scss';

function Search() {
  return (
    <main className="body search">
      <Header />
      <section className="search__content">
        <Property />
      </section>
    </main>
  )
}

export { Search };
