import React from 'react';
import './News.scss';

const News = () => {
  return (
    <section className="news">
      <h2 className="news-heading">뉴스</h2>
      <ul className="news-list">
        <li className="news-item">
          <article>
            <img className="news-item__img" src="" alt="" />
            <figure className="news-item__title"></figure>
          </article>
        </li>
      </ul>
    </section>
  );
};

export default News;
