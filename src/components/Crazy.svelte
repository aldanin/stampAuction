<script>
  import { fade } from "svelte/transition";
  import { elasticOut } from "svelte/easing";

  export let visible = true;
  export let goCrazy = false;

  $: {
    if (goCrazy) {
      visible = false;

      setTimeout(() => {
        visible = true;
      }, 100);
    }
  }

  function spin(node, { duration }) {
    return {
      duration,
      css: t => {
        const eased = elasticOut(t);

        return `
					transform: scale(${eased}) rotate(${eased * 1080}deg);
					color: hsl(
						${~~(t * 360)},
						${Math.min(100, 1000 - 1000 * t)}%,
						${Math.min(50, 500 - 500 * t)}%
					);`;
      }
    };
  }
</script>

<style>

</style>

{#if goCrazy}
  {#if visible}
    <div class="centered" in:spin={{ duration: 8000 }} out:fade>
      <slot />
    </div>
  {/if}
{:else}
  <div class="centered">
    <slot />
  </div>
{/if}
