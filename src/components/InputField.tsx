import { Todo } from "../App"

interface Props {
    todo: string,
    settodo: React.Dispatch<React.SetStateAction<string>>,
    todos: Todo[],
    settodos: React.Dispatch<React.SetStateAction<Todo[]>>,
}
const InputField = ({ todo, settodo, todos, settodos }: Props) => {
    const handleadd =()=>{
        settodos([...todos,{id:Math.random(),todo}])
    }
    return (
        <div className='inp'>
            <input type='text' placeholder="Add Task" onChange={(e) => settodo(e.target.value)} />
            <button onClick={()=> handleadd()}>add</button>
        </div>
    )
}

export default InputField