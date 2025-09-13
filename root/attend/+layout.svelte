<script>
  import { MenuItem } from '$lib/navigation';
  import Side from '../Side.svelte';

  let { children } = $props();
</script>

<nav>
  <ul>
    <MenuItem href="/attend">Conference Venue</MenuItem>
    <MenuItem href="/attend/travel">Travel Information</MenuItem>
  </ul>
</nav>

<main>
  {@render children()}
</main>

<Side />
