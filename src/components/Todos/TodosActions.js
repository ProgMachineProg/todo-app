import {RiDeleteBin2Line, RiRefreshLine} from 'react-icons/ri';
import Button from '../UI/Button'
import styles from './TodosActions.module.css'

const TodosActions = (props) => {
    const {resetTodos, deleteCompletedTodos, completedTodosExist} = props;

    return (
        <div className={styles.todosActionsContainer}>
            <Button
                title={"Reset Todos"}
                onClick={resetTodos}
            ><RiRefreshLine/></Button>
            <Button
                title={"Clear Completed Todos"}
                onClick={deleteCompletedTodos}
                disabled={!completedTodosExist}
            ><RiDeleteBin2Line/></Button>
        </div>
    )
}

export default TodosActions;