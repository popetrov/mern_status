import React, {useState, useContext} from 'react'
import axios from "axios"


import {  INITIAL_STATUSES } from './StatusesDashboard.const'
import { StatusesDashboardForm } from './Form/StatusesDashboardForm'
import { Status as StatusView } from '../Status/Status'
import {AuthContext} from "../../context/AuthContext"

import "./StatusesDashboard.css"


export const StatusesDashboard = () => {
    const[statuses, setStatuses] = useState(INITIAL_STATUSES)
    const {userId} = useContext(AuthContext)
    
    const deleteStatusHandler = (id) => {
            setStatuses(prev => prev.filter(status => status.id !== id))
    }

    const formSubmitHandle = (data) => {
        if(!data.status) return null

        setStatuses(prev => [...prev, data])
        
        const createStatus = async () => {
            try{
                if(!data.status) return null

                await axios.post('/api/status/add', {data, userId}, {
                    headers: {"Content-Type": "application/json"}
            })
            .then((prev) => setStatuses(...prev, data), console.log(statuses))
            }catch(e){
                console.log(e)
            }
        }
        createStatus()
    }

    return (
        <div className='StatusesDashboard'>
            {statuses.map(status => (
                <StatusView key={status.id} status={status} onDelete={deleteStatusHandler}/>
            ))}
            <StatusesDashboardForm onSubmit={formSubmitHandle}/>
        </div>
    )
}

export default StatusesDashboard;