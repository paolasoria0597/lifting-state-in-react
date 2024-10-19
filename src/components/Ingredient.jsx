const Ingredient= ({ingredient,handleClick, buttonLabel}) => {
  return (
    <li>
        {ingredient.name}
        <button onClick= {handleClick}>{buttonLabel}</button>
    </li>
  );
};
export default Ingredient; 