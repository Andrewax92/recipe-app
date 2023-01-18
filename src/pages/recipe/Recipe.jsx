import './recipe.css'
import {useFetch} from '../../hooks/useFetch'
import { useParams } from 'react-router'

const Recipe = () => {
const {id} = useParams()

const url = "http://localhost:3000/recipes/" + id
const{data:recipe,isPending,error} = useFetch(url)
console.log(recipe);

  return (
    <div className="recipe">
     
     {isPending && <p className="loading">Loading.....</p>}
     {error && <p className="error">error</p>}
  
     {recipe && (
      <>
         <h2 className="page-title"> {recipe.title}</h2>
         <p>Takes {recipe.cookingTime} to cook</p>
         <ul>
           {recipe.ingredients.map(ing => <li key={ing}>{ing}</li>)}
         </ul>
         <p className="method">{recipe.method}</p>
       </>
     )}
  
    </div>
  )
}

export default Recipe
