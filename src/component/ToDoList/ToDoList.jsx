import { useState } from "react";
import styles from "./ToDoList.module.css";

const ToDoList = () => {
	const [tasks, setTasks] = useState([{ task: "wash dishes", checked: false }]);
	const [newTask, setNewTask] = useState({ task: "", checked: false });

	function addTask() {
		setTasks([...tasks, newTask]);
		setNewTask({ task: "", checked: false });
	}

	function deleteTask(index) {
		setTasks([...tasks.filter((task, ind) => ind !== index)]);
	}

	function movTaskUp(index) {
		if (index !== 0) {
			tasks.splice(index - 1, 2, tasks[index], tasks[index - 1]);
			setTasks([...tasks]);
		}
	}

	function movTaskDown(index) {
		if (index !== tasks.length - 1) {
			tasks.splice(index, 2, tasks[index + 1], tasks[index]);
			setTasks([...tasks]);
		}
	}

	function handleCheckbox(index) {
		setTasks(() => {
			tasks[index].checked = !tasks[index].checked;
			return [...tasks];
		});
	}

	function handleInputChange(e) {
		setNewTask({ task: e.target.value, checked: false });
	}

	return (
		<div className={styles.toDoList}>
			<h1>To-Do-List</h1>
			<div>
				<input
					type="text"
					placeholder="enter a task ..."
					value={newTask.task}
					onChange={handleInputChange}
				/>
				<button className={styles.buttonAdd} onClick={addTask}>
					Add
				</button>
			</div>
			<ol>
				{tasks.map((task, index) => (
					<li key={index}>
						<input
							className={task.checked ? styles.checked : ""}
							type="checkbox"
							id="done"
							name="completed task"
							onClick={() => handleCheckbox(index)}
						/>
						<span
							style={{
								textDecoration: task.checked ? "line-through" : "none",
								textDecorationColor: task.checked ? "#ff1100" : "none",
							}}
							className={styles.text}
						>
							{task.task}
						</span>
						<button
							className={styles.buttonDel}
							onClick={() => deleteTask(index)}
						>
							delete
						</button>
						<button
							className={styles.buttonMove}
							onClick={() => movTaskUp(index)}
						>
							🔺
						</button>
						<button
							className={styles.buttonMove}
							onClick={() => movTaskDown(index)}
						>
							🔻
						</button>
					</li>
				))}
			</ol>
		</div>
	);
};

export default ToDoList;
