import Ingredient from "./Ingredient";
import '../App.css';

const IngredientList = ({ingredients,addToBurger}) => {

    return (
    <ul >
        {ingredients.map((ingredient,index)=> (
       <Ingredient
         key={index} 
         ingredient={ingredient}
         handleClick= {()=> addToBurger(ingredient)}
         buttonLabel="+"
       />
    ))}
    </ul>

    )};


  export default IngredientList;
  