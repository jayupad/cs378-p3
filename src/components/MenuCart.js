import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'; 

const MenuCart = ({subTotal, clear, order}) => {


    return (
      <div>
        <div className="row">
          <div className="col-6">
            <p> Subtotal ${subTotal} </p>
          </div>
          <div className="button-containers col-6" >
            <button className="generic-button" 
                    id="order" data-bs-toggle="modal" 
                    data-bs-target="#modal" 
                    onClick={() => {order()}}> Order </button>
            <button className="generic-button" 
                    onClick={() => {clear()}}> Clear All </button>
          </div>
        </div> 
        <div className="modal fade" id="modal">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Order Details</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
              </div>
              <div className="modal-body"> 
                {order()}
                <div className="button-containers">
                  <button type="button" id="close-button" className="generic-button" data-bs-dismiss="modal"> OK
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div> 
      </div>  
    );
}

export default MenuCart;
