# svelte-transitions-blur ([demo](https://v3.svelte.technology/repl?version=3.0.0-alpha17&gist=e59bb117a780ce5fdafc8014cfb894a1))

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
<img transition:blur src="https://v3.svelte.technology/logo.svg" width="200">
{/if}

<script>
  import blur from 'svelte-transitions-blur';

  let visible = false;
</script>
```
[demo](https://v3.svelte.technology/repl?version=3.0.0-alpha17&gist=e59bb117a780ce5fdafc8014cfb894a1)

## Parameters

As with most transitions, you can specify `delay` and `duration` parameters (both in milliseconds) and a custom `easing` function. Also, you can specify `radius` of the blur (in px). Additional parameter `inverse` let you change a direction of blur effect (in/out), for example, if you need to take blur effect when element appears.

```html
<label>
	<input bind:checked={visible} type=checkbox> show
</label>

{#if visible}
<img 
	transition:blur={{ 
		delay: 100, 
		duration: 1000, 
		easing: quintOut, 
		inverse: true, 
		radius: 5 
	}} 
	src="https://v3.svelte.technology/logo.svg" 
	width="200"
>
{/if}

<script>
  import blur from 'svelte-transitions-blur';
	import { quintOut } from 'svelte/easing';

  let visible = false;
</script>

<style>
	img { filter: blur(5px); }
</style>
```
[demo](https://v3.svelte.technology/repl?version=3.0.0-alpha17&gist=eb4f75471b38a4970fdb033cda38b0b9)

## License

MIT