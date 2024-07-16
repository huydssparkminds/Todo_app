<script lang="ts">
  import { flip } from "svelte/animate";
  import CardItem from "./CardItem.svelte";

  import { todosStore } from "../../store/store";

  $: todos = $todosStore;

  let draggingItem: string | null = null;

  const handleOnDrag = (e: DragEvent, item: any) => {
    e.dataTransfer?.setData("Widget", JSON.stringify(item));
    console.log("", item);
  };

  function handleDragOver(event: DragEvent): void {
    event.preventDefault();
  }

  const handleOnDrop = (e: DragEvent, i: number) => {
    e.preventDefault();
    const data = e.dataTransfer?.getData("Widget");
    if (data) {
      const obj = JSON.parse(data);
      todos = todos.map((todo) => {
        const indexItem = todo.items.findIndex((e) => e.id === obj.id);
        if (indexItem !== -1) {
          todo.items.splice(indexItem, 1);
        }
        return todo;
      });
      todos[i].items.push(obj);
      todosStore.set(todos);
      draggingItem = null;
    }
  };
</script>

<div class="grid grid-cols-1 md:grid-cols-4 gap-7">
  {#each todos as column, i (i)}
    <div
      class={`bg-[${column.color}] rounded-[4px] flex flex-col h-min ${draggingItem === column.status ? "bg-slate-600" : ""}`}
    >
      <div class="h-[5px] bg-black rounded-t-[4px] w-full opacity-10"></div>
      <div
        role="region"
        aria-label="Droppable area for {column.status}"
        class="p-[8px] flex-1 listItem"
        on:dragenter={() => (draggingItem = column.status)}
        on:dragleave={() => (draggingItem = null)}
        on:dragover={handleDragOver}
        on:drop={(e) => handleOnDrop(e, i)}
      >
        <span>{column.icon}</span>
        <span class="font-bold text-base text-white">{column.status}</span>
        <div class="mt-[5px] flex flex-col gap-3">
          {#each column.items as item (item.id)}
            <span animate:flip>
              <CardItem {item} {column} {handleOnDrag} /></span
            >
          {:else}
            <div class="cardEmpty"></div>
          {/each}
        </div>
      </div>
    </div>
  {/each}
</div>

<style>
  .listItem {
    transition: all 0.3s;
    transition: background-color 0.3s ease-in-out;
  }
  .cardEmpty {
    border: 2px dashed grey;
    height: 89px;
    width: 100%;
    border-radius: 4px;
  }
</style>
