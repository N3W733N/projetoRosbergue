import React from 'react';
import IconCross from './../Icons/IconCross';
import './styles/Content.scss';

const Content = ({ item, onClose }) => (
  <div className="content">
    <div className="content__background">
      <div className="content__background__shadow" />
      <div
        className="content__background__image"
        style={{ 'background-image': `url(${item.imageBg})` }}
      />
    </div>
    <div className="content__area">
      <div className="content__area__container">
        {/* <div className="content__title">{item.text}</div> */}
        <div className="content__description">
          {item.text}
        </div>
      </div>
      <button className="content__close" onClick={onClose}>
        <IconCross />
      </button>
    </div>
  </div>
);

export default Content;
