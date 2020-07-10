<script>
  import Exhibit from "./Exhibit.svelte";
  import repo from "../bl/exhibits";


  let exhibits = repo;

  function onSubmitBid(ev) {
      const detail = ev.detail;
      console.log(detail);
      updateAuction(detail);
  }

  function updateAuction(detail) {
      const {userId, id, bid} = detail;

    const found = exhibits.find(stamp=> stamp.id === id);
    if(found) {
        found.currentBid = bid;
    }

    exhibits = [...exhibits]
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

    .stamp-container {
      padding: 10px 0;
    }
  }
</style>

<div class="container">
  {#each exhibits as exhibit}
    <div class="stamp-container">
      <Exhibit exhibit={exhibit} on:submitBid={onSubmitBid} />
    </div>
  {/each}

</div>
