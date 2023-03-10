import { useLocation } from 'react-router'
import { useFetch } from '../../hooks/useFetch'
import RecipeList from '../../components/RecipeList'
import './search.css'

const Search = () => {

  const queryString = useLocation()
  const queryParams = new URLSearchParams(queryString.search)
  const query = queryParams.get('q')

  const url = ` http://localhost:3000/recipes?q=${query}`

  const {error,isPending,data} = useFetch(url)

  return (
    <div>
        <h2 className="page-title">Recipes including "{query}"</h2>
        {error && <p className="error">{error}</p>}
        {isPending && <p className="loadig"> Loading ........</p>}
        {data &&  <RecipeList recipes={data}/>}
    </div>
  )
}

export default Search
