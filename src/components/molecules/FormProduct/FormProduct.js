import React, { useState, useCallback } from 'react';
import { tableType } from '../../../constants/constants';

import './FormProduct.css';

const FormProduct = ({ submit }) => {
  const [productName, setProductName] = useState('');
  const [amount, setAmount] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    submit({
          name: productName,
          amount: +amount,
          price: +price
        })
    setProductName('');
    setAmount('');
    setPrice('');
  }, [productName, amount, price, submit])

  const handleChangeName = useCallback((event) => {
    setProductName(event.target.value)
  }, []);

  const handleChangeAmount = useCallback((event) => {
    setAmount(event.target.value)
  }, []);

  const handleChangePrice = useCallback((event) => {
    setPrice(event.target.value)
  }, []);

  return (
    <div className='formProduct'>
      <form onSubmit={handleSubmit}>
        <label>
          {tableType.PRODUCTNAME}
        </label>
        <input type='text' value={productName} onChange={handleChangeName} />
        <label>
          {tableType.AMOUNT}
        </label>
        <input type='text' value={amount} onChange={handleChangeAmount} />
        <label>
          {tableType.PRICE}
        </label>
        <input type='text' value={price} onChange={handleChangePrice} />
        <button className='btnSubmit'>Submit</button>
      </form>
    </div>
  )
}

export default FormProduct;