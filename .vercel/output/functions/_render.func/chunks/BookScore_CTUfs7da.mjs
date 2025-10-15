import { c as createComponent, m as maybeRenderHead, b as renderTemplate } from './astro/server_0B4bc_gt.mjs';
import { a as setOnSetGetEnv } from './runtime_x9uYhqlb.mjs';

/* eslint-disable @typescript-eslint/no-unused-vars */
// @ts-check

setOnSetGetEnv(() => {
	
});
const SCORE_API_ENDPOINT = "https://www.random.org/integers/?num=1&min=2&max=5&col=1&base=10&format=plain&rnd=new";

const $$BookScore = createComponent(async ($$result, $$props, $$slots) => {
  const res = await fetch(SCORE_API_ENDPOINT);
  const scoreValue = await res.text();
  return renderTemplate`${maybeRenderHead()}<span class="text-xs" id="score">
⭐ Puntuación: ${scoreValue.trim()}/5
</span>`;
}, "/Users/jesusperez/Documents/dev books/src/components/BookScore.astro", void 0);

const $$file = "/Users/jesusperez/Documents/dev books/src/components/BookScore.astro";
const $$url = undefined;

export { $$BookScore as default, $$file as file, $$url as url };
