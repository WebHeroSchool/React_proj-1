import React from 'react';
import Item from '../Item/Item.js';

const ItemList = ({todoItem}) => (<ul>
  <li><Item todoItem = {todoItem} /></li>
  <li><Item todoItem = {'Написать комментарии'} /></li>
  <li><Item todoItem = {'Уточнить информацию в footer'} /></li>
</ul>);

export default ItemList;