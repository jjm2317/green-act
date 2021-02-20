import React from 'react';
import './Recycle.scss';
import PlasticImage from '../../images/recyclePlastic.png';
import CanImage from '../../images/recycleCan.png';
import PaperImage from '../../images/recyclePaper.png';

const Recycle = () => {
  return (
    <section className="recycle">
      <h2 className="recycle-headingqn">분리수거</h2>
      <ul className="recycle-list">
        <li className="recycle-item">
          <img src={PlasticImage} alt="플라스틱류" />
        </li>
        <li className="recycle-item">
          <img src={CanImage} alt="캔류" />
        </li>
        <li className="recycle-item">
          <img src={PaperImage} alt="종이류" />
        </li>
      </ul>
    </section>
  );
};

export default Recycle;
