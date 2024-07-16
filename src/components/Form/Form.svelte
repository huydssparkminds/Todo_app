<script lang="ts">
  import type { Task } from "../../model/model";
  import { v4 as uuidv4 } from "uuid";
  import { addTodo } from "../../store/store";

  let title: string = "";
  let tag: string = "";
  let error: { title?: boolean; tag?: boolean } = {};
  const handleSubmit = () => {
    if (title === "") {
      error.title = true;
    } else if (tag === "") {
      error.tag = true;
    } else {
      error.title = false;
      error.tag = false;
      let newTodo: Task = { id: uuidv4(), title, tag };
      addTodo(newTodo);
      title = "";
      tag = "";
    }
  };
</script>

<form class="max-w-md" on:submit|preventDefault={handleSubmit}>
  <div class="relative z-0 w-full mb-5 group">
    <input
      bind:value={title}
      class="w-full px-4 py-3 rounded-lg font-medium bg-gray-100 border {error.title
        ? 'border-red-500'
        : 'border-gray-200'}  placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
      type="text"
      placeholder="Title"
    />
    <input
      bind:value={tag}
      class="w-full px-4 py-3 rounded-lg font-medium bg-gray-100 border {error.tag
        ? 'border-red-500'
        : 'border-gray-200'} placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
      type="text"
      placeholder="Tag"
    />
  </div>

  <button
    type="submit"
    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
    >Submit</button
  >
</form>
