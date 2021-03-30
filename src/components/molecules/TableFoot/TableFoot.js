import React, { useContext } from 'react';
import { ContextApp } from '../../../reducers/reducers';

import './TableFoot.css';

const TableFoot = () => {

  const { state } = useContext(ContextApp);

  const totalPrice = state.reduce((acc, item) => acc += item.price, 0);

  return (
    <tfoot>
      <tr>
        <th>Total: {totalPrice}$</th>
      </tr>
    </tfoot>
  )
}

export default TableFoot;