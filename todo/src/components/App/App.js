import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import './App.css';

const App = () => {
	const items = [
		{
			value: 'Сверсть сайт по макету',
			id: 1
		},
		{
			value: 'Написать комментарии',
			id: 2
		},
		{
			value: 'Уточнить информацию в footer',
			id: 3
		}	
	];

	return (
	    <div className = 'wrap'>    
	    <h1>Важные дела:</h1>
	    	<InputItem />
	    	<ItemList items = {items} />
	    	<Footer count={8} />
	    </div>);
}

export default App;