<script>
  import { resolve } from '$app/paths';
  import Side from '../Side.svelte';

  let { children } = $props();
</script>

<nav>
  <ul>
    <li><a href={resolve('/venue')}>Conference Venue</a></li>
    <li><a href={resolve('/venue/travel')}>Travel Information</a></li>
  </ul>
</nav>

<main>
  {@render children()}
</main>

<Side />
