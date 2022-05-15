<script lang="ts">
import { onMount } from 'svelte';
import { createScene } from './scene';

let el: HTMLCanvasElement;

onMount(() => {
  createScene(el);
});
</script>

<main>
  <canvas bind:this="{el}"></canvas>
</main>
