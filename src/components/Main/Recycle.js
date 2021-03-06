import React from 'react';
import './Recycle.scss';
import PlasticImage from '../../images/recyclePlastic.png';
import CanImage from '../../images/recycleCan.png';
import PaperImage from '../../images/recyclePaper.png';

const Recycle = () => {
    return (
        <section className="recycle">
            <div className="left-section">
                <h2 className="recycle-title">분리수거</h2>
                <div className="arrow-buttons">
                    <div className="left-button">←</div>
                    <div className="right-button">→</div>
                </div>
            </div>
            <div className="right-section">
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
            </div>
        </section>
    );
};

export default Recycle;