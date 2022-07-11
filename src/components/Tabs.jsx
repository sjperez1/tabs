import React, {useState} from 'react'
import '../stylings/directimport.css'

const Tabs = (props) => {
    const [tabarrayindex, setTabarrayindex] = useState(0)
    const clickHandler = (e, i) => {
        setTabarrayindex(i)
    }
    return (
        <div>
            {
                props.tabsArray.map((tab, i)=>(
                    <button onClick={(e) => clickHandler(e, i)} key={i}>{tab.tabnumber}</button>
                ))
            }
            <p className='text'>{props.tabsArray[tabarrayindex].displaymessage}</p>
        </div>
    )
}
export default Tabs