import '../App.css'
import {useState, useEffect} from 'react'

const PageComponent = (props) => {
    const page_id = props.match.params.id

    const [itemList, setItemList] = useState([])
    const [addItem, setAddItem] = useState('')
    const [flagCounter, incrementCounter] = useState(0)

    var idCounter = -1

    const getItemList = async() => {

        const response = await fetch('http://localhost:5000/page/'+page_id, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const res = await response.json()
        console.log(res.res)
        console.log(typeof res)
        setItemList(res.res)
    }

    const triggerChange = (e) => {
        setAddItem(e.target.value)
    }

    const addNewItem = async() => {
        const newData = {
            data : {
            taskName: addItem
            }
        }
        console.log(newData)
        const response = await fetch('http://localhost:5000/page/'+page_id, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newData)
        })
        const res = await response.json()
        console.log(res)
        incrementCounter(flagCounter+1)

    }

    const clearList = async() => {
        const response = await fetch('http://localhost:5000/page/clear/'+page_id, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const res = await response.json()
        console.log(res)
        incrementCounter(flagCounter+1)
    }

    const xButton = async(e) => {
        const button_id = e.target.id
        const response = await fetch('http://localhost:5000/page/clearIndex/'+page_id+'/'+button_id, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const res = await response.json()
        console.log(res)
        incrementCounter(flagCounter+1)
    }

    useEffect(()=>{getItemList()},[flagCounter])

    return (
        <div class="container my-5">
        <div class="row justify-content-start">
            <div class="col-sm-6">
                <input type="text" class="form-control" id="itemName" placeholder="Item Name" value={addItem} onChange={e=>triggerChange(e)}/>
            </div>
            <div class="col-sm-2">
                    <div class="btn-group" role="group" aria-label="Basic example">
                        <button type="button" class="btn btn-primary" onClick={addNewItem}>Add</button>
                        <button type="button" class="btn btn-warning" onClick={clearList}>Clear</button>
                    </div>
            </div>
        </div>
        <hr/>
        {itemList && itemList.map(item=>{
            idCounter+=1
            return <div class="row d-felx justify-content-center">
            <div class="col-sm-12">
                <ul class="list-group">
                    <li class="list-group-item">{item.taskName}<button type="button" class="btn btn-danger float-right" id={idCounter} onClick={e=>xButton(e)}>X</button></li>
                  </ul>
            </div>
        </div>
        })}
    </div>
    )
}

export default PageComponent
