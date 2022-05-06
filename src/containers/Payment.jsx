import React, {useContext} from 'react';
import '../styles/components/Payment.css';
import AppContext from '../context/AppContext';
import { PayPalButton } from 'react-paypal-button';
import { HandleSumTotal } from '../utils/HandleSumTotal';
import { useNavigate } from 'react-router-dom';

const Payment= () => {
  const {state, addNewOrder} = useContext(AppContext);
  const {cart} = state;
  let navigate = useNavigate();

  const paypalObtions = {
    clientId : 'AcN-OqxlpLf1a1YdSteWnI0hdTBt_3JGskjQsq6wo1JNDs2QC5H8VXIXqbRKnd_0-ETgD9Xm2PDj5cWA',
    intent: 'capture',
    currency: 'USD'
  }

  const butttonStyles = {
    layout: 'vertical',
    shape: 'rect',
  }

  const handlePaymentSuccess = (data) =>{
    if(data.statu === 'COMPLETED'){
      const newOrder = {
        buyer,
        product: cart,
        payment: data,
      }
      addNewOrder(newOrder); 
      navigate('/checkout/success');
    }
  }

  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido:</h3>
        {cart.map(item => (
          <div className="payment-item" key={`key-${item.name}`}>
            <div className="payment-element">
              <h4>{item.title}</h4>
              <span>$ {item.price}</span>
            </div>
          </div>
        ))}
        <div className="Payment-button">
          <PayPalButton
            paypalOptions={paypalObtions}
            buttonStyles={butttonStyles}
            amount={HandleSumTotal(cart)}
            onPaymentStart={() => console.log('start payment')}
            onPaymentSuccess={data=> handlePaymentSuccess(data)}
            onPaymentError={error => console.log(error)}
            onPaymentCancel={cancel => console.log(cancel)}
          
          />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Payment;