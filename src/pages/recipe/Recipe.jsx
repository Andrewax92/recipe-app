import './recipe.css'
import {useFetch} from '../../hooks/useFetch'
import { useParams } from 'react-router'
import { useNavigate } from 'react-router'
import {AiOutlineDelete,AiOutlineEdit} from "react-icons/ai"
import { Link } from 'react-router-dom'



const Recipe = () => {
const {id} = useParams()
const navigate = useNavigate()



const url = "http://localhost:3000/recipes/" + id


const{data,isPending,error,deleteArticle} = useFetch(url)



// console.log(recipe);

const handleDelete = async() => {
    try {
      const res = await fetch(url,{
        method:"DELETE",
        headers:{
          "Content-Type":"aplication/json"
        }
      })
      if (res.ok){
        navigate('/')
      }else{
        throw new Error(res.statusText)
      }
      
    } catch (error) {
      console.log(error);
      
    }
}

  return (
    <div className="recipe">
     
     {isPending && <p className="loading">Loading.....</p>}
     {error && <p className="error">error</p>}
  
     {data && (

      <> 
      <div className="recipe-icon">
        <Link to={`/edit/${id}`} className="edit-icon" state={{data:data}}>
            <AiOutlineEdit />
          </Link>
        <span onClick={handleDelete} className="delete-icon" >
            <AiOutlineDelete/>
        </span>
      </div>
         
         <h2 className="page-title"> {data.title}</h2>
         <p>Takes {data.cookingTime} to cook</p>
         <ul>
           {data.ingredients.map(ing => <li key={ing}>{ing}</li>)}
         </ul>
         <p className="method">{data.method}</p>
         
       </>
     )}
  
    </div>
  )
}

export default Recipe
