import { useState } from "react"
import { useNavigate } from "react-router"
import { Navigate } from "react-router"
import "./SearchBar.css"

const Searchbar = () => {
    const navigate = useNavigate()
    const[term,setTerm] = useState('')
    
    const handleSubmit = (e) => {
          e.preventDefault()
        navigate(`search?q=${term}`)
    }

  return (
    <div className="search-bar">

        <form onSubmit={handleSubmit}>
            <label htmlFor="search">Search</label>
            <input type="text" 
            id="search"
            onChange={(e) => setTerm(e.target.value)}/>
        </form>
    </div>
  )
}
export default Searchbar