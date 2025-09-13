<script>
  import NavigationItem from '$lib/NavigationItem.svelte';
  import Side from '../Side.svelte';

  let { children } = $props();
</script>

<nav>
  <menu>
    <NavigationItem href='/about'>What is PGConf.dev?</NavigationItem>

    <NavigationItem href='/about/code-of-conduct'>
      Code of Conduct
    </NavigationItem>

    <NavigationItem href='/about/contact'>Contact Us</NavigationItem>
  </menu>
</nav>

<main>
  {@render children()}
</main>

<Side />
