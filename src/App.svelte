<script lang="ts">
  import TodoColums from "./components/board/TodoColums.svelte";
  import Modal from "./components/Modal/Modal.svelte";

  let isOpen: boolean = false;

  const handlOpen = () => {
    isOpen = !isOpen;
  };
</script>

<div class="main">
  <h1 class="font-bold text-2xl mb-4">Project Example</h1>
  <button
    on:click={handlOpen}
    style="box-shadow: inset 0 2px 4px 0 rgb(2 6 23 / 0.3), inset 0 -2px 4px 0 rgb(203 213 225);"
    class="mb-4 inline-flex cursor-pointer items-center gap-1 rounded border border-slate-300 bg-gradient-to-b from-slate-50 to-slate-200 px-4 py-2 font-semibold hover:opacity-90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-300 focus-visible:ring-offset-2 active:opacity-100"
  >
    Add To Do
  </button>
  <TodoColums />

  {#if isOpen}
    <Modal {handlOpen}/>
  {/if}
</div>

<style>
  .main {
    padding: 40px 100px;
    height: 100vh;
  }
</style>
