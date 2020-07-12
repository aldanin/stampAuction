<script>
  import { onDestroy, onMount } from "svelte";
  import Exhibit from "./Exhibit.svelte";
  import repo from "../bl/exhibits";
  import auctionStore from "../bl/AuctionStore";

  let exhibits = [];
  let unsubscribeStore;

  onMount(() => {
    unsubscribeStore = auctionStore.subscribe(store => {
      exhibits = store.exhibits
    });
  });

  onDestroy(() => {
    unsubscribeStore();
  });

  function onSubmitBid(ev) {
    const detail = ev.detail;
    console.log(detail);
    auctionStore.updateAuction(detail)
  }
</script>

<style type="text/scss">
  .container {
    overflow: auto;
    height: 100%;
    width: 100%;
    background-color: #f9f9f9;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px;
    max-height: 100%;
    min-height: 0;

    .exhibit-container {
      padding: 10px 0;
    }
  }
</style>

<div class="container">
  {#each exhibits as exhibit}
    <div class="exhibit-container">
      <Exhibit {exhibit} on:submitBid={onSubmitBid} />
    </div>
  {/each}

</div>
