import './ToDo.css'

const ToDo = (props) => {
    return (
        <div className='blue' key={props.todo.id}>
            <div onClick={() => props.onHandleToggle(props.todo.id)}>
                {props.todo.task}
            </div>
            <button onClick={() => props.onRemoveTask(props.todo.id)}>
                X
            </button>
        </div>
    )
}

export default ToDo;