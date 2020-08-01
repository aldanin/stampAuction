<script>
  import { onDestroy, onMount } from "svelte";
  import Exhibit from "./Exhibit.svelte";
  import repo from "../bl/exhibits";
  import auctionStore from "../bl/AuctionStore";
  import Crazy from './Crazy.svelte';

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
    height: 100%;

    .exhibit-container {
      padding: 10px 0;
    }
  }
</style>

<div class="container">
  {#each exhibits as exhibit}
    <div class="exhibit-container">
      <Crazy goCrazy={false}><Exhibit {exhibit} on:submitBid={onSubmitBid} /></Crazy>
    </div>
  {/each}

</div>
