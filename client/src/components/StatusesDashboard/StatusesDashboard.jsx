import React, {useState, useContext} from 'react'
import axios from "axios"


import {  INITIAL_STATUSES } from './StatusesDashboard.const'
import { StatusesDashboardForm } from './Form/StatusesDashboardForm'
import { Status as StatusView } from '../Status/Status'
import {AuthContext} from "../../context/AuthContext"

import "./StatusesDashboard.css"
import { useCallback } from 'react'


export const StatusesDashboard = () => {
    const[statuses, setStatuses] = useState([])
    const {userId} = useContext(AuthContext)

    const getStatuses = useCallback(async () => {
        try {
            await axios.get('api/status', { 
                headers: {
                    'Content-Type:': 'application/json'
                },
                params: { userId }
                .then((response) => setStatuses(response.data))
            })
        } catch(e) {
            console.log(e)
        }
    }, [userId])
    
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
            .then((response) => [...statuses, response.data])
            }catch(e){
                console.log(e)
            }
        }
        createStatus()
    }

    return (
        <div className='StatusesDashboard'>
            {statuses.map((status, index) => (
                <StatusView key={index} status={status.data} onDelete={deleteStatusHandler}/>
            ))}
            <StatusesDashboardForm onSubmit={formSubmitHandle}/>
        </div>
    )
}

export default StatusesDashboard;