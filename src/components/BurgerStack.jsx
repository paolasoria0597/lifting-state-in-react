import Ingredient from "./Ingredient";
import '../App.css';

const BurgerStack = ({stack,removeFromBurger}) => {
    return (
     <ul>
        {stack.length===0 ? (
            <p> No Ingredients</p> 
        ):(
            stack.map((ingredient,index)=> (
                <Ingredient
                 key={index}
                 ingredient={ingredient}
                 handleClick={()=> removeFromBurger(index)}
                 buttonLabel="x"
                />
            ))
        )}
    </ul>
    );
};
  export default BurgerStack;
  