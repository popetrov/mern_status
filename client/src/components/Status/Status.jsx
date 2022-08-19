import { useCallback, useState } from "react"
import "./Status.css"

import Picker from 'emoji-picker-react';
import { faTrashCan  } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"



export const Status = ({ status, onDelete }) => {
    const deleteHandler = useCallback(()=>{
        onDelete?.(status.id)
    },[onDelete, status.id])

    const [chosenEmoji, setChosenEmoji] = useState(null);
    const[active, setActive]= useState(true)

    const onEmojiClick = (event, emojiObject) => {
      setChosenEmoji(emojiObject);
      setActive(!active)
    };

    const emojiViewHandler = () => {
        setActive(!active)
    }

    return (
        <>
            <div 
                key={status.id} 
                className="StatusesDashboard-Status"
            >
                {chosenEmoji ? (
                    <span onClick={emojiViewHandler} className="StatusesDashboard-EmojiView_text">{chosenEmoji.emoji}</span>
                ) : (
                    <span className='StatusesDashboard-EmojiView' onClick={emojiViewHandler}>
                        <p className="StatusesDashboard-EmojiView_text">😂</p>
                    </span>
                )}
                {status.status} 
                <FontAwesomeIcon 
                    className='StatusesDashboard-DeleteStatus' 
                    icon={faTrashCan} 
                    onClick={deleteHandler} 
                />
            </div>
            <div className={active ? "StatusesDashboard-Emoji" : "StatusesDashboard-EmojiView"}>
                <Picker onEmojiClick={onEmojiClick} />
            </div>
        </>
    )
}