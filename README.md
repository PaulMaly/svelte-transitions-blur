# svelte-transitions-blur ([demo]())

Blur transition plugin for [Svelte 3](https://v3.svelte.technology).

## Usage

Install with npm or yarn:

```bash
npm install --save svelte-transitions-blur
```

Then import the plugin to your Svelte component.

```html
<label>
  <input bind:checked={visible} type=checkbox> show
</label>

{#if visible}
  <img transition:blur src="image.jpg">
{/if}

<script>
  import blur from 'svelte-transitions-blur';

  let visible = false;
</script>
```

## Parameters

As with most transitions, you can specify `delay` and `duration` parameters (both in milliseconds) and a custom `easing` function. Also, you can specify `radius` of the blur (in px). Additional parameter `inverse` let you change a direction of blur effect (in/out), for example, if you need to take blur effect when element appears.

```html
{#if visible}
  <img transition:blur={{ delay: 100, duration: 500, easing: quintOut, inverse: true, radius: 20 }} src="image.jpg">
{/if}

<script>
  import blur from 'svelte-transitions-blur';
  import { quintOut } from 'svelte/easing';

  let visible = false;
</script>
```


## License

[MIT]()