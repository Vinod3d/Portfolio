import React, { useState } from 'react';

const Card = (props) => {
  const [modal, setModal] = useState(false)
  // console.log(props);

  const toggleModal = ()=>{
    setModal(!modal);
  }
  return (
    <>
      <div className='box btn_shadow '>
        <div className='img'>
          <img src={props.image} alt='' onClick={toggleModal}/>
        </div>
        <div className='category d_flex'>
          <span onClick={toggleModal}>{props.date}</span>
          <label>
            {/* <i className='far fa-heart'></i> {totalLike} */}
          </label>
        </div>
        <div className='title'>
          <h2 onClick={toggleModal}>{props.title_one}</h2>
          <a href='#popup' className='arrow' onClick={toggleModal}>
            <i className='fas fa-arrow-right'></i>
          </a>
        </div>
      </div>


      {/* Popup box */}
      {modal && (
        <div className='modal modal-blog'>
          <div onClick={toggleModal} className='overlay'></div>
          <div className='modal-content'>
            <div className='modal-img left'>
              <img src={props.image} alt='' />
            </div>
            <div className='modal-text right'>
              <span>{props.date}</span>
              <h1>{props.title_one}</h1>
              <p>{props.desc_one}</p>

              <h1>{props.title_two}</h1>
              <p>{props.desc_two}</p>

              <h1>{props.title_three}</h1>
              <p>{props.desc_three}</p>
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

              <div className="contact mtop">
                <h1>Leave a Reply</h1>
                <div className="contact d_flex">
                  <div className="left">
                    <input type="text" placeholder='Name'/>
                    <input type="text" placeholder='Email'/>
                    <input type="text" placeholder='Website'/>
                    <button className='btn_shadow'>SUBMIT NOW</button>
                  </div>
                  <div className="right">
                    <textarea name="" id="" cols="30" rows="10" placeholder='Comment'></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
