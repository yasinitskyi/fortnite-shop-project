import React from 'react';

function GoodsItem(props) {
  const { id, name, description, heal, image, addToCart } = props;
  return (
    <>
      <div className="card" id={id}>
        <div className="card-image waves-effect waves-block waves-light">
          <img className="activator" src={image} alt={name} />
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">{name}<i className="material-icons right">more_vert</i></span>
          <p>
            <button type="button" className='btn' onClick={addToCart}>Buy</button>
            <span className="right" data-price="notAnActualPrice">{heal}</span>
          </p>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">Description<i className="material-icons right">close</i></span>
          <p>{description}</p>
        </div>
      </div>
    </>
  )
}

export default GoodsItem;