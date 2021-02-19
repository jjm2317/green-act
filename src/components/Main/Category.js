import React from 'react';
import './Category.scss';

const Category = () => {
  return (
    <section className="category">
      <h2 className="category-heading a11yHidden">카테고리</h2>
      <ul className="category-list">
        <li className="category-item">
          <h3>분리수거</h3>
          <span>Greenact를 통해서 정확한 분리수거 방법을 알아보세요!</span>
        </li>
        <li className="category-item">
          <h3>게시판</h3>
          <span>
            게시판을 통해서 궁금한 점을 물어보고 다양한 사람들과 소통을
            해보세요!
          </span>
        </li>
        <li className="category-item">
          <h3>뉴스/캠페인</h3>
          <span>분리수거와 관련되 최신 뉴스와 캠페인을 알아보세요!</span>
        </li>
      </ul>
    </section>
  );
};

export default Category;
