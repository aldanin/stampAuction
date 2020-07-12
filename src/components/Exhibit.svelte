<script>
  import { createEventDispatcher } from "svelte";
  import Button from "@smui/button";

  const dispatch = createEventDispatcher();

  export let exhibit = {
    item: {
      country: "UK",
      img: "penny-black.jpg",
      name: "Penny Black",
      year: 1840
    },
    id: "1",
    catPrice: 3000,
    currentBid: 2000,
    isSold: false,
    isOnSale: false
  };

  let bidInputValue;

  $: console.log("exibit", exhibit);

  function onClick(ev) {
    dispatch("submitBid", {
      userId: "1",
      id: exhibit.id,
      bid: bidInputValue.value ? parseInt(bidInputValue.value) : undefined
    });
  }

  function onForge() {
    alert('for')
  }
</script>

<style type="text/scss">
  .container {
    background-color: black;
    color: white;
    position: relative;
    font-family: cursive;

    .exhibit-wrap {
      display: flex;
      flex-direction: column;

      align-items: center;
      width: 350px;
      padding: 20px;
      border: solid 5px #b32727;

      img {
        width: 250px;
      }

      h5 {
      }

      &.in-auction {
        border: solid 3px red;
      }
    }

    .sold-sign {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      content: "\274c";

      color: rgba(255, 24, 0, 0.66);
      text-align: center;
      justify-content: center;
      display: flex;
      align-items: center;
      flex-direction: column;

      .sold-sign-x {
        line-height: 50%;
        font-size: 400px;
      }

      .sold {
        font-size: 50px;
        text-transform: uppercase;
      }

      div {
        height: 100%;
      }
    }

    .details {
      height: 100%;
      min-height: 0;

      .line {
        display: flex;
        /*justify-content: space-between;*/

        .caption {
          margin-right: 20px;
        }

        &.bid {
          color: yellow;
        }
      }
    }
  }

  .container.disabled {
    :global(.mdc-button--raised, .mdc-button--unelevated) {
      background-color: #a5a5a5;
    }
    .exhibit-wrap {
        border: solid 5px #a7a6a6;

        .bid {
          color:#b3b3b3;
        }
    }
  }
  
  .forged {
    background-color: red;
    color: #900000;
    border-radius: 50%;
    height: 30px;
    line-height: 1em;
    margin-right: 20px;
    visibility: hidden;

  }
</style>

<div class="container {!exhibit.isOnSale ? 'disabled' : ''}">
  <div>
    <div class="exhibit-wrap">
      <img src={`./stamps/${exhibit.item.img}`} />
      {#if exhibit.isSold}
        <div class="sold-sign">
          <div class="sold-sign-x">x</div>
          <div class="sold">Sold</div>
        </div>
      {/if}

      <h3>
        {exhibit.item.name}
        <span>({exhibit.item.year})</span>
      </h3>
      <div class="details">
        <div class="line">
          <span class="caption">Country:</span>
          <span>{exhibit.item.country}</span>
        </div>
        <div class="line">
          <span class="caption">Cat Price:</span>
          <span>{exhibit.catPrice}$</span>
        </div>
        <div class="line bid">
          <span class="caption">Current Bid:</span>
          <span>{exhibit.currentBid}$</span>
        </div>
      </div>
      <div class="toolbar">
      <button class="forged" on:click={onForge} title="Click only if Forgery">!!!</button>
        <input
          type="number"
          min={exhibit.currentBid}
          bind:this={bidInputValue}
          value={exhibit.currentBid}
          disabled={!exhibit.isOnSale} />
        <Button
          variant="raised"
          on:click={onClick}
          disabled={!exhibit.isOnSale}>
          click
        </Button>
      </div>
    </div>

  </div>

</div>
