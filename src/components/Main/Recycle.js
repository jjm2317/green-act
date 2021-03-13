import React from 'react';
import './Recycle.scss';
import PlasticImage from '../../images/recyclePlastic.png';
import CanImage from '../../images/recycleCan.png';
import PaperImage from '../../images/recyclePaper.png';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

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
                        <Link to="/Recycle/Plastic">
                           <img src={PlasticImage} alt="플라스틱류" />
                        </Link>
                    </li>
                    <li className="recycle-item">
                        <Link to="/Recycle/Can">
                           <img src={CanImage} alt="캔류" />
                        </Link>
                    </li>
                    <li className="recycle-item">
                        <Link to="/Recycle/Paper">
                           <img src={PaperImage} alt="종이류" />
                        </Link>
                    </li>
                    <li className="recycle-item">
                        <Link to="/Recycle/Paper">
                            <img src={PaperImage} alt="유리병" />
                        </Link>
                    </li>
                    <li className="recycle-item">
                        <Link to="/Recycle/Paper">
                            <img src={PaperImage} alt="일반쓰레기" />
                        </Link>
                    </li>
                    <li className="recycle-item">
                        <Link to="/Recycle/Paper">
                            <img src={PaperImage} alt="스티로폼" />
                        </Link>
                    </li>
                    <li className="recycle-item">
                        <Link to="/Recycle/Paper">
                            <img src={PaperImage} alt="비닐류" />
                        </Link>
                    </li>
                    <li className="recycle-item">
                        <Link to="/Recycle/Paper">
                            <img src={PaperImage} alt="음식물쓰레기" />
                        </Link>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Recycle;