<script>
  import { resolve } from '$app/paths';
  import { page } from '$app/state';

  import { Menu } from '@lucide/svelte';
  import { PGConf } from '$lib/logo';

  import Banner from './Banner.svelte';
  import Toggle from './Toggle.svelte';

  let main = $state();
</script>

<style>
  header {
    line-height: 2;
  }

  nav {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 0;
  }

  menu {
    padding-inline: 1rem;

    @media (max-width: 767px) {
      width: 100%;
    }

    @media (min-width: 768px) {
      display: flex;
      margin: 0;
      padding: 0;
    }
  }

  #main-menu {
    padding-inline: 0;
  }

  @media (max-width: 767px) {
    #main-menu:not([data-open='true']) {
      display: none;
    }
  }

  li {
    list-style-type: none;
    margin: 0;
  }

  header :global(:is(a, button, summary)) {
    background-color: unset;
    border-radius: var(--border-radius);
    color: inherit;
    display: block;
    font-family: inherit;
    font-size: inherit;
    margin: 0.5rem 0.25rem;
    outline-offset: 0;
    padding: 0.5rem 0.75rem;
    text-decoration: none;

    :global(&[aria-pressed='true']),
    :global([open] > &) {
      background-color: rgba(255 255 255 / 15%);
    }

    :global(&:is(:active, :focus, :hover)) {
      background-color: rgba(255 255 255 / 70%);
      color: #033c6b;
    }
  }
</style>

<header>
  <nav class="matter">
    <a class="logo" href={resolve('/')}><PGConf size="1.75rem" /></a>

    <Toggle
      bind:on={main}
      class="narrow"
      style="padding-inline: 0.625rem"
      aria-label="Main Menu"
    >
      <Menu size="1.75rem" style="vertical-align: middle;" />
    </Toggle>

    <menu id="main-menu" data-open={main}>
      <li>
        <a href={resolve('/about')}>
          About <span class="narrow">the Conference</span>
        </a>
      </li>
      <li>
        <a href={resolve('/venue')}>
          Attend <span class="narrow">PGConf.dev 2026</span>
        </a>
      </li>
      <li>
        <a href={resolve('/sponsor')}>
          <span class="narrow">Become a</span> Sponsor
        </a>
      </li>
    </menu>
  </nav>

  {#if page.route.id == '/'}<Banner />{/if}
</header>
