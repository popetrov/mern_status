import { useCallback, useState } from "react"
import { v4 } from 'uuid'


import { EMPTY_STATUS_FORM } from "../StatusesDashboard.const"


export const StatusesDashboardForm = ({ onSubmit }) => {
    const[form, setForm] = useState(EMPTY_STATUS_FORM)
    
    const inputChangeHandle = useCallback((e) => {
        const { target } = e

        setForm(prev => ({
            ...prev,
            [target.name]: target.value
        }))
    }, [])

    const formSubmitHandle = useCallback((e) => {
        e.preventDefault()

        onSubmit({
                ...form,
                id: v4()
            })

        setForm(EMPTY_STATUS_FORM)

    }, [form, onSubmit])

    return (
        <form className='StatusesDashboard-Form' onSubmit={formSubmitHandle}>
            <input 
                className='StatusesDashboard-StatusInput' 
                value={form.status} 
                name="status"
                onChange={inputChangeHandle}
            />
            <button 
                className='StatusesDashboard-AddButton waves-effect waves-light btn green darken-2'
            >
                Добавить комментарий
            </button>
        </form>
    )
}