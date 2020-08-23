import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);
    // const totalPrice = cart.reduce((total, prd) => total + prd.price, 0);   // reduce diye kora

    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price;
    }

    let shipping = 0;
    if (total > 35) {
        shipping = 0;
    }
    else if (total > 15) {
        shipping = 4.99
    }
    else if (total > 0) {
        shipping = 12.99
    }

    let tax = (total / 10);
    let taxRound = tax.toFixed(2);

    const grandtotal = (total + shipping + Number(taxRound)).toFixed(2);
    
    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }
    return (
        <div>
            <h4>Order Summery</h4>
            <p>Items Ordered: {cart.length} </p>
            <p>Product Price: {formatNumber(total)}</p>
            <p><small>Tax + VAT : {taxRound}</small></p>
            <p><small>Shipping Cost : {shipping}</small></p>
            <p>Total Price: {grandtotal}</p>
        </div>
    );
};

export default Cart;