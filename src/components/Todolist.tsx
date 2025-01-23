import { Todo } from "../App"

interface Props {
    todos: Todo[]
}

const Todolist = ({ todos }: Props) => {
    return (
        <div >

            {todos.map((el) =>
                <div className="task">
                     <input type="checkbox" ></input>
                    <h3>{el.todo} </h3>
                </div>
            )}
        </div>
    )
}

export default Todolist