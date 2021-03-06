import React, {useContext} from 'react';
import '../styles/components/Checkout.css';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
import { HandleSumTotal } from '../utils/HandleSumTotal';

const Checkout = () => {
    const {state, removeFromCart} = useContext(AppContext);
    const {cart} = state;
    
    const handleRemove = (product,indexToRemove) => () =>{
        removeFromCart(product,indexToRemove);
    }

    return (  
        <div className="Checkout">
            <div className="Checkout-content">
                {cart.length > 0 ? <h3>Lista de Pedidos:</h3> : <h3>No hay pedidos</h3>}
                {cart.map((item, index) => (

                    <div className="Checkout-item" key={item.id}>
                        <div className="Checkout-element">
                            <h4>{item.title}</h4>
                            <span>${item.price}</span>
                        </div>
                        <button type='button'>
                            <i className='fas fa-trash-alt' onClick={handleRemove(item,index)}/>
                        </button>
                    </div>

                ))}
            </div>
            {cart.length > 0 &&      
                <div className="Checkout-sidebar">
                    <h3>{`Precio Total: $ ${HandleSumTotal(cart)}`}</h3>
                    <Link to="/checkout/information">
                        <button type='button'>Continuar Pedido</button>
                    </Link>
                </div>
            }
        </div>
    );
}
 
export default Checkout;