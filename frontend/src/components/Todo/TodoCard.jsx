import React from 'react'
import { FaTrashAlt, FaEdit } from 'react-icons/fa';

const TodoCard = ({id,title,body,onDelete,onUpdate}) => {
  return (
    <div className="p-3 todo-card position-relative">
        <div>
            <h5>{title}</h5>
            <p className="todo-card-p">
                {body}
            </p>
        </div>
        <button className="todo-update-btn" onClick={onUpdate} title="Update">
          <FaEdit />
        </button>
        <button className="todo-delete-btn" onClick={() => { console.log(id); onDelete(); }} title="Delete">
          <FaTrashAlt />
        </button>
    </div>
  )
}

export default TodoCard