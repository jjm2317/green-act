import React from 'react';
import './Search.scss';

const Search = () => {
  return (
    <section className="search">
      <h2 className="main-logo">
        <img src="/images/mainLogo.png" alt="greenAct" />
      </h2>
      <div className="main-visual">
        <img src="/images/mainVisual.png" />
      </div>
      <form className="search-form">
        <input className="" type="search" />
        <div className="link-box link-box--green">
          <a>검색</a>
        </div>
      </form>
    </section>
  );
};

export default Search;
