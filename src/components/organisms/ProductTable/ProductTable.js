import React, { useCallback, useEffect, useContext } from 'react';
import TableBody from '../../molecules/TableBody';
import FormProduct from '../../molecules/FormProduct';
import TableFoot from '../../molecules/TableFoot';
import { tableType } from '../../../constants/constants';
import { ContextApp } from '../../../reducers/reducers';

import './ProductTable.css';

const ProductTable = () => {
  const { state, dispatch } = useContext(ContextApp);

  const addProduct = useCallback((data) => {
    dispatch({
      type: 'ADD_PRODUCT',
      payload: data
    })
  }, []);

  useEffect(() => {
    localStorage.setItem('productState', JSON.stringify(state))
  }, [state])

  return (
    <>
      <h1>Product Table</h1>
      <FormProduct submit={addProduct} />
      <table>
        <thead className='tableHeader'>
          <tr className='headerElements'>
            <th className='headerElement'>{tableType.PRODUCTNAME}</th>
            <th className='headerElement'>{tableType.AMOUNT}</th>
            <th className='headerElement'>{tableType.PRICE}</th>
          </tr>
        </thead>
        <TableBody />
        <TableFoot />
      </table>
    </>
  )
}

export default ProductTable;