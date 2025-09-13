<script>
  import { MenuItem } from '$lib/navigation';
  import Side from '../Side.svelte';

  let { children } = $props();
</script>

<nav>
  <ul>
    <MenuItem href="/sponsor/levels">Sponsorship Levels</MenuItem>
  </ul>
</nav>

<main>
  {@render children()}
</main>

<Side />
