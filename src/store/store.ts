import { writable } from "svelte/store";
import type { ColumnTask, Task } from "../model/model";
import { v4 as uuidv4 } from "uuid";

let todos: ColumnTask[] = [
  {
    status: "To Do",
    icon: "🗒️",
    color: "todo",
    items: [{ id: uuidv4(), title: "Learn Svelte", tag: "Label" }],
  },
  {
    status: "In Progress",
    icon: "💻",
    color: "inprogress",
    items: [
      { id: uuidv4(), title: "Learn React", tag: "Always" },
      { id: uuidv4(), title: "UI/UX", tag: "Label" },
    ],
  },
  {
    status: "Review",
    icon: "🖍",
    color: "review",
    items: [{ id: uuidv4(), title: "Learn Sping", tag: "Release" }],
  },
  {
    status: "Done",
    icon: "🚀",
    color: "done",
    items: [{ id: uuidv4(), title: "Components", tag: "UI" }],
  },
];

export const todosStore = writable<ColumnTask[]>(todos);

export const addTodo = (newTask: Task | null = null) => {
  if(newTask === null) {
    return
  }
  todosStore.update((currentTodos) => {
    const indexTodo = currentTodos.findIndex((e) => e.status === "To Do");
    if (indexTodo !== -1) {
      currentTodos[indexTodo].items.push(newTask);
    } else {
      console.log('Cột "To Do" không tìm thấy');
    }
    return currentTodos; 
  });

};
