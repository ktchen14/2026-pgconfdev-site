<script>
  import { resolve } from '$app/paths';
  import { page } from '$app/state';

  let { href, children, ...rest } = $props();

  href = resolve(href);
</script>

<li>
  <a {href} aria-current={page.url.pathname == href ?? 'page'} {...rest}>
    {@render children()}
  </a>
</li>
