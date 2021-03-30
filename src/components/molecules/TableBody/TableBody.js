import React, { useContext, useCallback } from "react";
import { ContextApp } from '../../../reducers/reducers';

import './TableBody.css';

const TableBody = () => {

  const { state, dispatch } = useContext(ContextApp);

  const handleClick = useCallback((name) => {
    dispatch({
      type: "REMOVE_PRODUCT",
      payload: name
    })
  }, []);

  return (
    state.map((item, index) => (
      <tbody className='tableBody' key={index}>
        <tr className='bodyElements'>
          <td className='bodyElement'>{item.name}</td>
        </tr>
        <tr className='bodyElements'>
          <td className='bodyElement'>{item.amount}</td>
        </tr>
        <tr className='bodyElements'>
          <td className='bodyElement'>
            {item.price}$
              <button className='btnRemove' onClick={() => handleClick(item.name)}>Remove</button>
          </td>
        </tr>
      </tbody>
    ))
  )
}

export default TableBody;