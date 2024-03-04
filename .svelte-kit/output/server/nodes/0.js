

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.m-y6BY9b.js","_app/immutable/chunks/scheduler.kAlY8CUs.js","_app/immutable/chunks/index.2OJ4lfVL.js"];
export const stylesheets = ["_app/immutable/assets/0.ssAHqI00.css"];
export const fonts = [];
