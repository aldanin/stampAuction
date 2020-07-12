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
    updateAuction(detail);
  }

  function updateAuction(detail) {
    const { userId, id, bid } = detail;

     auctionStore.update(store => {
        const foundIndex = store.exhibits.findIndex(exhibit => exhibit.id === id);
        const found = store.exhibits[foundIndex];
        if (found) {
          found.currentBid = bid;
          found.bidCount = found.bidCount === undefined ? 1 : found.bidCount + 1;
          found.bidderId = store.currentUser.id; 

          if (found.bidCount === 3) {
            store.exhibits.forEach(exhibit => {
              exhibit.isOnSale = false;
            })

            store.exhibits[foundIndex+1].isOnSale = true;

          }
        }
            return {
                ...store, exhibits: [...store.exhibits]
            }
        })

    // const found = exhibits.find(stamp => stamp.id === id);
    // if (found) {
    //   found.currentBid = bid;
    // }

    // exhibits = [...exhibits];
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
