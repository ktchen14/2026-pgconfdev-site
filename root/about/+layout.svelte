<script>
  import { MenuItem } from '$lib/navigation';
  import Side from '../Side.svelte';

  let { children } = $props();
</script>

<nav>
  <menu>
    <MenuItem href="/about">What is PGConf.dev?</MenuItem>
    <MenuItem href="/about/code-of-conduct">Code of Conduct</MenuItem>
    <MenuItem href="/about/contact-us">Contact Us</MenuItem>
  </menu>
</nav>

<main>
  {@render children()}
</main>

<Side />
