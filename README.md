# tailwindcss-capacitor-safe-area

Tailwind CSS utilities for Capacitor safe areas.

## Features

- **Responsive safe area utilities** tailored for margin, padding, height and position
- **Flexible spacing helpers** to extend safe areas or ensure content remains unobstructed with offset and minimum value variants
- **Modern CSS support**, including `inline-start`, `inline-end`, `scroll-margin`, `scroll-padding` and more to handle modern layouts

## Getting started

```sh
npm install tailwindcss-capacitor-safe-area
```

Then add the plugin to your `tailwind.config.js` file:

```js
// tailwind.config.js
module.exports = {
	theme: {},
	plugins: [require("tailwindcss-capacitor-safe-area")],
};
```

## Usage

To extend content behind the safe area, add or append `viewport-fit=cover` to your viewport meta tag:

```html
<meta
	name="viewport"
	content="width=device-width, initial-scale=1, viewport-fit=cover"
/>
```

### Base utilities

Handle safe area margin, padding, height and position.

```html
<header class="pt-safe">...</header>
<main class="px-safe">...</main>
<footer class="pb-safe">...</footer>
```

### Offset utilities

Extend base utilities with an additional offset.

```html
<div class="pr-safe-offset-4">...</div>
```

This adds right padding equal to the safe area plus `4`.

### Or utilities

Apply a minimum value while respecting the safe area.

```html
<div class="pb-safe-or-8">...</div>
```

This adds bottom padding equal to the larger of the safe area or `8`.

## Generated styles

### Margin

```css
.m-safe {
	margin-top: var(--ion-safe-area-top);
	margin-right: var(--ion-safe-area-right);
	margin-bottom: var(--ion-safe-area-bottom);
	margin-left: var(--ion-safe-area-left);
}
.mx-safe {
	margin-right: var(--ion-safe-area-right);
	margin-left: var(--ion-safe-area-left);
}
.my-safe {
	margin-top: var(--ion-safe-area-top);
	margin-bottom: var(--ion-safe-area-bottom);
}
.ms-safe {
	margin-inline-start: var(--ion-safe-area-left);
}
.me-safe {
	margin-inline-end: var(--ion-safe-area-left);
}
.mt-safe {
	margin-top: var(--ion-safe-area-top);
}
.mr-safe {
	margin-right: var(--ion-safe-area-right);
}
.mb-safe {
	margin-bottom: var(--ion-safe-area-bottom);
}
.ml-safe {
	margin-left: var(--ion-safe-area-left);
}
```

### Scroll margin

Same as [margin](#margin), prefixed with `scroll-`.

### Padding

```css
.p-safe {
	padding-top: var(--ion-safe-area-top);
	padding-right: var(--ion-safe-area-right);
	padding-bottom: var(--ion-safe-area-bottom);
	padding-left: var(--ion-safe-area-left);
}
.px-safe {
	padding-right: var(--ion-safe-area-right);
	padding-left: var(--ion-safe-area-left);
}
.py-safe {
	padding-top: var(--ion-safe-area-top);
	padding-bottom: var(--ion-safe-area-bottom);
}
.ps-safe {
	padding-inline-start: var(--ion-safe-area-left);
}
.pe-safe {
	padding-inline-end: var(--ion-safe-area-left);
}
.pt-safe {
	padding-top: var(--ion-safe-area-top);
}
.pr-safe {
	padding-right: var(--ion-safe-area-right);
}
.pb-safe {
	padding-bottom: var(--ion-safe-area-bottom);
}
.pl-safe {
	padding-left: var(--ion-safe-area-left);
}
```

### Scroll padding

Same as [padding](#padding), prefixed with `scroll-`.

### Height

Screen height, using `-webkit-fill-available` on Safari:

```css
.min-h-screen-safe {
	min-height: calc(
		100vh - (var(--ion-safe-area-top) + var(--ion-safe-area-bottom))
	);
	min-height: -webkit-fill-available;
}
.max-h-screen-safe {
	max-height: calc(
		100vh - (var(--ion-safe-area-top) + var(--ion-safe-area-bottom))
	);
	max-height: -webkit-fill-available;
}
.h-screen-safe {
	height: calc(
		100vh - (var(--ion-safe-area-top) + var(--ion-safe-area-bottom))
	);
	height: -webkit-fill-available;
}
```

```css
.min-h-fill-safe {
	min-height: -webkit-fill-available;
}
.max-h-fill-safe {
	max-height: -webkit-fill-available;
}
.h-fill-safe {
	height: -webkit-fill-available;
}
```

```css
/* vh */

.min-h-vh-safe {
	min-height: calc(
		100vh - (var(--ion-safe-area-top) + var(--ion-safe-area-bottom))
	);
}
.max-h-vh-safe {
	max-height: calc(
		100vh - (var(--ion-safe-area-top) + var(--ion-safe-area-bottom))
	);
}
.h-vh-safe {
	height: calc(
		100vh - (var(--ion-safe-area-top) + var(--ion-safe-area-bottom))
	);
}

/* dvh */

.min-h-dvh-safe {
	min-height: calc(
		100dvh - (var(--ion-safe-area-top) + var(--ion-safe-area-bottom))
	);
}
.max-h-dvh-safe {
	max-height: calc(
		100dvh - (var(--ion-safe-area-top) + var(--ion-safe-area-bottom))
	);
}
.h-dvh-safe {
	height: calc(
		100dvh - (var(--ion-safe-area-top) + var(--ion-safe-area-bottom))
	);
}

/* svh */

.min-h-svh-safe {
	min-height: calc(
		100svh - (var(--ion-safe-area-top) + var(--ion-safe-area-bottom))
	);
}
.max-h-svh-safe {
	max-height: calc(
		100svh - (var(--ion-safe-area-top) + var(--ion-safe-area-bottom))
	);
}
.h-svh-safe {
	height: calc(
		100svh - (var(--ion-safe-area-top) + var(--ion-safe-area-bottom))
	);
}

/* lvh */

.min-h-lvh-safe {
	min-height: calc(
		100lvh - (var(--ion-safe-area-top) + var(--ion-safe-area-bottom))
	);
}
.max-h-lvh-safe {
	max-height: calc(
		100lvh - (var(--ion-safe-area-top) + var(--ion-safe-area-bottom))
	);
}
.h-lvh-safe {
	height: calc(
		100lvh - (var(--ion-safe-area-top) + var(--ion-safe-area-bottom))
	);
}
```

### Position

```css
.inset-safe: {
	top: var(--ion-safe-area-top);
	right: var(--ion-safe-area-right);
	bottom: var(--ion-safe-area-bottom);
	left: var(--ion-safe-area-left);
}
.inset-x-safe: {
	right: var(--ion-safe-area-right);
	left: var(--ion-safe-area-left);
}
.inset-y-safe: {
	top: var(--ion-safe-area-top);
	bottom: var(--ion-safe-area-bottom);
}
.start-safe: {
	inset-inline-start: var(--ion-safe-area-left);
}
.end-safe: {
	inset-inline-end: var(--ion-safe-area-left);
}
.top-safe: {
	top: var(--ion-safe-area-top);
}
.right-safe: {
	right: var(--ion-safe-area-right);
}
.bottom-safe: {
	bottom: var(--ion-safe-area-bottom);
}
.left-safe: {
	left: var(--ion-safe-area-left);
}
```

### Variants

Spacing-based utiltiies can be augmented with either `-offset-{value}` or `-or-{value}` suffixes.

For example, using Tailwind's default spacing scale:

```css
.mr-safe-offset-8 {
	margin-right: calc(var(--ion-safe-area-right) + 2rem);
}
.pb-safe-or-20 {
	padding-bottom: max(var(--ion-safe-area-right), 5rem);
}
```

## Troubleshooting

The height utilities may not always work as expected. Add the following global CSS for the correct behaviour:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
	html,
	body,
	#root {
		height: -webkit-fill-available;
	}
}
```
