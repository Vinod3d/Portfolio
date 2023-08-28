import React from 'react'

const Card = ({image, category, totalLike, title}) => {
  return (
    <>
      <div className='box btn_shadow '>
        <div className='img'>
          <img src={image} alt='' onClick={toggleModal} />
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
            <i class='fas fa-arrow-right'></i>
          </a>
        </div>
      </div>
    </>
  )
}

export default Card
