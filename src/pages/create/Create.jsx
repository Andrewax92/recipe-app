import { useState,useRef, useEffect } from "react"
import { useFetch } from "../../hooks/useFetch"
import { useNavigate } from "react-router"
import "./create.css"

const Create = () => {
  const[title,setTitle] = useState('')
  const[method,setMethod] = useState('')
  const[cookingTime,setCookinTime] = useState('')
  const[newIngredient,setNewIngredient] = useState("")
  const[ingredients,setIngredients] = useState([])
  const ingredient = useRef(null)
  const[dublicateError,setDublicateError] = useState(null)

  const navigate = useNavigate()

  const{postData,data,error} = useFetch('http://localhost:3000/recipes','POST')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Posting Data
   console.log(data);
   postData({title,ingredients,method,cookingTime: cookingTime + "minutes"})
   console.log(data);


  }

  const handleAdd = (e) => {
    e.preventDefault()
    const ing = newIngredient.trim()
    
    if(ing && ingredients.includes(ing)){
      setDublicateError(ing)
     setTimeout(() => {
       setDublicateError(null)
     }, 1500);
    
    }else{
      setIngredients((prevIng) => [...prevIng,ing])
    }
    setNewIngredient('')
    ingredient.current.focus()

  }
  
  useEffect(() => {
    
    if(data){
        navigate('/')
    }

  },[data])

  return (
   <div className="create">


   <form onSubmit={handleSubmit}> 
      <div>
        <label htmlFor="recipe">Recipe Title</label>
        <input type="text"
          id="email"
          value={title} 
          onChange = { (e) => setTitle(e.target.value) }/>
      </div>

        <div>
          <label htmlFor="ingredients">Recipe Ingredients</label>
          <div className="ingredients">
            <input 
            type="text"
            id="ingredients"
            onChange={(e) => setNewIngredient(e.target.value)} 
            value={newIngredient}
            ref = {ingredient}  />

            <button onClick={handleAdd} className="btn">add</button>
         </div>
         {dublicateError && <p className="dublicateError">The entered item: "{dublicateError}" is already in the list</p>}
         <p >Current ingredients:{ingredients.map( i => <em key={i}>{i}, </em>)}</p>
       </div>

       <div>
        <label htmlFor="recipe">Recipe Title</label>
        <textarea 
        id="recipe"
         value={method} 
         onChange={(e) => setMethod(e.target.value)} />
      </div>

      <div>
        <label htmlFor="cookinTime">Cooking Time</label>
        <input type="number" 
         id="cookingTime"
         value={cookingTime}
         onChange={(e) => setCookinTime(e.target.value)}/>
      </div>
      
      <button className="btn">submit</button>
   </form>
   </div>
  )
}

export default Create
