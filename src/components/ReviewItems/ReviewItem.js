import React from 'react';

const ReviewItem = (props) => {
    // console.log(props);
        const { name, quantity,img, key,price } = props.product;
    return (
        <div style={{borderBottom: "1px solid lightgray", marginBottom: "5px", paddingBottom:"5px", marginLeft:"200px"  }} className="review-item">
            <h4 className="product-name">{name}</h4>
            <img style= {{width: "100px", height:"100px"}} src={img} alt=""/>
            <p>Quantity : {quantity}</p>
            <p><small>$ {price}</small></p>
            <br/>
            <button 
            className="main-button"
            onClick={() => props.removeProduct(key)}
            >Remove</button>
        </div>
    );
};

export default ReviewItem;