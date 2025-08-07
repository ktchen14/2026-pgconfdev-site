<script>
  import { base } from '$app/paths';
  const { data } = $props();
  const { newsIndex } = data;
</script>

<svelte:head>
  <title>News - PGConf.dev</title>
  <meta name="description" content="Latest news from PGConf.dev 2026" />
</svelte:head>

{#each newsIndex as [id, { Component, title, description, date }], i (id)}
  {#if i}<hr />{/if}

  <hgroup>
    <h2><a href="{base}/news/{id}">{title}</a></h2>
    <p>
      <date datetime={date.format('YYYY-MM-DD')}>{date.format('LL')}</date>
    </p>
  </hgroup>

  <Component />
{/each}
