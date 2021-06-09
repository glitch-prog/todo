
import React from 'react'
import  {useState} from 'react'


const Todo = () =>{

    const[inputItem, setInputItem] = useState("");

    const[items,setItems]= useState([]);

    const addItem=()=> {
        if (!inputItem) {

        } else {
            setItems([...items, inputItem]);
            setInputItem('')
        }
    }

    return(
        <div className='main'>
            <div className='addItem'>

                <input type="text" placeholder="Создать заметку"
                    value={{inputItem}}
                       onChange={(e)=>setInputItem(e.target.value)}
                />

                <button onClick={addItem}>Создать</button>

            </div>

            <div className='ShowItems'>
                {
                    items.map((elem,ind)=>{
                        return(
                            <div className="eachItem">
                                <h3>{ elem }</h3>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Todo