import IngredientList from './components/IngredientList';
import BurgerStack from './components/BurgerStack';
import { useState } from 'react';

import './App.css';

export const availableIngredients = [
  { name: 'Kaiser Bun', color: 'saddlebrown' },
  { name: 'Sesame Bun', color: 'sandybrown' },
  { name: 'Gluten Free Bun', color: 'peru' },
  { name: 'Lettuce Wrap', color: 'olivedrab' },
  { name: 'Beef Patty', color: '#3F250B' },
  { name: 'Soy Patty', color: '#3F250B' },
  { name: 'Black Bean Patty', color: '#3F250B' },
  { name: 'Chicken Patty', color: 'burlywood' },
  { name: 'Lettuce', color: 'lawngreen' },
  { name: 'Tomato', color: 'tomato' },
  { name: 'Bacon', color: 'maroon' },
  { name: 'Onion', color: 'lightyellow' },
  { name: 'Cheddar Cheese', color: '#FDE18B' },
  { name: 'Swiss Cheese', color: '#F1E1A8' },
];



const App = () => {
  const [stack, setStack]= useState([]); // this state variable is needed to store the ingredients in the burger. useState is necessary because the stack changes and react needs to know when to rerender the UI.
  const addToBurger=(ingredient)=> { // this function will create a new array with the current stack plus the new ingredient at the end.
    setStack([...stack, ingredient]); // I used the spread operator to copy the current stack and then add the new igredient to the end.
  };
   const removeFromBurger= (index) => {
    setStack(stack.filter((_,i)=> i !== index));
   };
  return (
    <main>
      <h1>Burger Stacker</h1>
      <section>
      <IngredientList
      ingredients={availableIngredients} 
      addToBurger={addToBurger}
      />
      <BurgerStack   
         stack={stack}
         removeFromBurger={{removeFromBurger}} 
         />
      </section>
    </main>
  );
};

export default App;
