<script lang="js">
 import Auction from './components/Auction.svelte';
 
  export let name;
</script>

<style type="text/scss">
  main {
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;

    img {
      width: 300px;
      height: 300px;
    }
  }
</style>

<main>
<Auction/>
</main>
