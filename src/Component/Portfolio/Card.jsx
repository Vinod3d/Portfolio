import React, { useState } from 'react';

const Card = ({ image, category, totalLike, title }) => {
  const [modal, setModal] = useState(false)

  const toggleModal = ()=>{
    setModal(!modal);
  }
  return (
    <>
      <div className='box btn_shadow '>
        <div className='img'>
          <img src={image} alt='' onClick={toggleModal}/>
        </div>
        <div className='category d_flex'>
          <span onClick={toggleModal}>{category}</span>
          <label>
            <i className='far fa-heart'></i> {totalLike}
          </label>
        </div>
        <div className='title'>
          <h2 onClick={toggleModal}>{title}</h2>
          <a href='#popup' className='arrow' onClick={toggleModal}>
            <i className='fas fa-arrow-right'></i>
          </a>
        </div>
      </div>


      {/* Popup box */}
      {modal && (
        <div className='modal'>
          <div onClick={toggleModal} className='overlay'></div>
          <div className='modal-content d_flex'>
            <div className='modal-img left'>
              <img src={image} alt='' />
            </div>
            <div className='modal-text right'>
              <span>Featured - Design</span>
              <h1>{title}</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate distinctio assumenda explicabo veniam temporibus eligendi.</p>
              <p>Consectetur adipisicing elit. Cupiditate distinctio assumenda. dolorum alias suscipit rerum maiores aliquam earum odit, nihil culpa quas iusto hic minus!</p>
              <div className='button f_flex mtop'>
                <button className='btn_shadow'>
                  LIKE THIS <i className='far fa-thumbs-up'></i>
                </button>
                <button className='btn_shadow'>
                  VIEW PROJECT<i className='fas fa-chevron-right'></i>
                </button>
              </div>
              <button className='close-modal btn_shadow' onClick={toggleModal}>
                <i className='fas fa-times'></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
