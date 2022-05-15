import Cygal from './Cygal.svelte';

const app = new Cygal({
  target: document.body,
  props: {
    name: 'world',
  },
});

export default app;
