import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./ToDoList.module.css";

const ToDoList = () => {
	const [tasks, setTasks] = useState(['zero',11,22,33,44]);
	const [newTask, setNewTask] = useState("");

	function handleInputChange(e) {
		setNewTask(e.target.value);
	}

	function addTask() {
		setTasks([...tasks, newTask]);
		setNewTask("");
	}

	function deleteTask(index) {
		setTasks([...tasks.filter((task, ind) => ind !== index)]);
	}

	function movTaskUp (index) {
		
		tasks.splice(index-1,2,tasks[index],tasks[index-1])
	      setTasks([...tasks])
		
	}

	function movTaskDown (index) {
		tasks.splice(index,2,tasks[index+1],tasks[index])
		setTasks([...tasks])
	}

	function handleCheckbox (e) {
		console.log(e)
	}

	return (
		<div className={styles.toDoList}>
			<h1>To-Do-List</h1>
			<div>
				<input
					type="text"
					placeholder="enter a task ..."
					value={newTask}
					onChange={handleInputChange}
				/>
				<button className={styles.buttonAdd} onClick={addTask}>
					Add
				</button>
			</div>
			<ol>
				{tasks.map((task, index) => (
					<li key={index}>
						<input type="checkbox" id="done" name="completed task"  onClick={handleCheckbox}/>
						<span className={styles.text}>{task}</span>
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

ToDoList.propTypes = {
	//	test: PropTypes.string,
};

export default ToDoList;
