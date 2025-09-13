<script>
  // import { resolve } from '$app/paths';
  import Side from '../Side.svelte';

  let { children } = $props();
</script>

<!-- <nav> -->
<!--   <ul> -->
<!--     <li><a href={resolve('/about')}>What is PGConf.dev?</a></li> -->
<!--     <li><a href={resolve('/about/code-of-conduct')}>Code of Conduct</a></li> -->
<!--     <li><a href={resolve('/about/contact')}>Contact Us</a></li> -->
<!--   </ul> -->
<!-- </nav> -->

<main>
  {@render children()}
</main>

<Side />
