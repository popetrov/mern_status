import React, {useState, useContext, useCallback, useEffect} from 'react';
import {AuthContext} from '../../context/AuthContext'
import axios from 'axios'
import './MainPage.css'


export const MainPage = () => {
    const [text, setText] = useState('')
    const [memories, setMemories] = useState([])
    const {userId} = useContext(AuthContext)

    const getData = useCallback(async () => {
        try{
            await axios.get('https://popetrov-mern.herokuapp.com/api/data', {
                headers: {
                    'Content-Type': 'application/json'
                },
                params: {userId}
            })
            .then((response) => setMemories(response.data))
        }catch(e){
            console.log(e)
        }
    },[userId])

    const createData = useCallback(async () => {
        if(!text) return null
        try{
            await axios.post('https://popetrov-mern.herokuapp.com/api/data/add', {text, userId}, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then((response) => {
                setMemories([...memories], response.data)
                setText('')
                getData()
            })
        }catch(e){
            console.log(e)
        }
    },[getData, memories, text, userId])

    const removeData = useCallback( async (id) => {
        try{
            await axios.delete(`https://popetrov-mern.herokuapp.com/api/data/delete/${id}`, {id}, {
                headers: {
                    'Content-Type': 'application/json',
                    "Accept": "application/json",
                    "Access-Control-Allow-Origin": "*",
                    "X-Requested-With": "XMLHttpRequest",
                    "Access-Control-Allow-Methods" : "GET,POST,PUT,DELETE,OPTIONS",
                    "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
                }
            })
            .then(() => getData())
        }catch(e){
            console.log(e)
        }
    },[getData]) 

    useEffect(() => {
        getData()
    },[getData])

    return (
        <div className="container">
            <div className="main-page">
                <form 
                    className="form form-login"
                    onSubmit={e => e.preventDefault()}
                >
                    <div className="row">
                        <div className="input-field col s12">
                            <input 
                                type="text"
                                id='text'
                                name='input'
                                value={text}
                                className='validate'
                                onChange={e => setText(e.target.value)} 
                            />
                            <label htmlFor="input">Воспоминание</label>
                        </div>
                        <div className="row">
                            <button 
                                className="waves-effect waves-light btn green"
                                onClick={createData}
                            >
                                Добавить воспоминание
                            </button>
                        </div>
                    </div>
                </form>

                <h3>Мои Воспоминания:</h3>
                <div className="todos">
                    {
                        memories.map((memory, i) => {
                            return (
                                <div className="row flex todos-item" key={i}>
                                    <div className="col todos-num">
                                        {i+1}
                                    </div>
                                    <div className="col todos-text">
                                        {memory.text}
                                    </div>
                                    <div className="todos-buttons col">
                                        <i 
                                            className="material-icons red-text"
                                            onClick={() => removeData(memory._id)}
                                        >
                                            delete_forever
                                        </i>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}


