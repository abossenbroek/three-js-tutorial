<script lang="ts">
import { onMount } from 'svelte';

let el: HTMLCanvasElement;

onMount(async () => {
  const { createScene } = await import('./scene');
  createScene(el);
});
</script>

<main>
  <canvas bind:this="{el}"></canvas>
</main>
