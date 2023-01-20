import { useTheme } from "../hooks/useTheme";
import {MdBrightness4} from "react-icons/md"
// import styles
import './ThemeSelector.css'

const themeColors = ['#58249c','#249c6b','#b70233']

const ThemeSelector = () => {


    const{changeColor,mode,changeMode} = useTheme()
    console.log(mode);
  return (
    <div className="theme-selector">
        <div className="theme-mode_icon">
            < MdBrightness4 
            onClick={() => changeMode(mode === 'dark' ? "light" : "dark") }
            style={{fill: mode === "dark"? 'white' : 'black'}}
            />
        </div>
        <div className="theme-buttons">
           {themeColors.map(color => (
               <div 
                key={color}
                onClick={() => changeColor(color)}
                style={{background:color}}/>
           ))}
        </div>
      
    </div>
  )
}

export default ThemeSelector
