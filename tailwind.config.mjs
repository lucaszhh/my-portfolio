/** @type {import('tailwindcss').Config} */
const token = (name) => `rgb(var(--${name}) / <alpha-value>)`;

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				bg: token('bg'),
				surface: token('surface'),
				raised: token('raised'),
				line: token('line'),
				fg: token('fg'),
				muted: token('muted'),
				subtle: token('subtle'),
				accent: token('accent'),
				'accent-fg': token('accent-fg'),
				danger: token('danger'),
			},
			fontFamily: {
				sans: ['"Geist Variable"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
				mono: ['"Geist Mono Variable"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
			},
			maxWidth: {
				page: '76rem',
				prose: '65ch',
			},
			letterSpacing: {
				tightest: '-0.045em',
			},
			transitionTimingFunction: {
				out: 'cubic-bezier(0.22, 1, 0.36, 1)',
			},
		},
	},
	plugins: [],
};
