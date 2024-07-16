<script lang="ts">
  import type { Task } from "../../model/model";

  export let item: Task;
  export let column;
  export let handleOnDrag;

  const textColor = column.status != "Done" ? "text-white" : "text-black";
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div draggable="true" on:dragstart={(e) => handleOnDrag(e, item)} class="card ">
  <span class="font-medium text-sm">
    {item.title}
  </span>
  <div class="flex gap-2 items-center mt-[10px]">
    <img
      src="https://s3-alpha-sig.figma.com/img/6a7f/debf/89a7bb2a7edfbef052ef27f61bcad084?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=E6CbE18jm6Ivsv3ydL0ygtbTdXwCDQGwrwGtyqReTxuSaQS~WnRMBDk7n-ulI1NBCmDvJYduxfN1W6xDyhFwn5aYAAv2UMP8F64WzajxMjfkvwng9PPGYgNwksRLRogXP8UAiuLELjRHF~WWDODZKcQSyqCdD~IPS~pZ6fw2x1i~WTwcR6JbFCPlyXnNL~g6YTe58~2qEQViKQcrXEl8bHhWsc-nBZ86xm5vOphJo1A9PLWbxLET5tvfKNnQ9osCejwp6pKT1pdCPDoJZYxNa3-gGHUQa2mJH7NBahwYZ8rybvlfOYk5ikl2QRAJlPl4QKkaC7cZagJIbc8ebMW6Hw__"
      alt="ava"
    />
    <p class="tag {column.color} {textColor}">{item.tag}</p>
  </div>
</div>

<style>
  .card {
    padding: 15px 10px;
    border-radius: 4px;
    background-color: white;
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.25);
    transition: transform .2s;
    cursor:grabbing;
  }
  .card:active{
    transform: scale(1.1);
  }
 
  img {
    height: 20px;
    width: 20px;
    border-radius: 9000px;
    overflow: hidden;
  }
  .tag {
    padding: 5px 4px 5px 4px;
    font-weight: 700;
    font-size: 10px;
    border-radius: 2px;
  }
</style>
