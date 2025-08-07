<script>
  const { data } = $props();
  const { Component, title, description, date } = data;
</script>

<svelte:head>
  <title>{title} - PGConf.dev</title>
  <meta name="description" content={description} />
</svelte:head>

<hgroup>
  <h2>{title}</h2>
  <p>
    <date datetime={date.format('YYYY-MM-DD')}>{date.format('LL')}</date>
  </p>
</hgroup>

<Component />
