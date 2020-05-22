import { Application, Router } from 'https://deno.land/x/oak/mod.ts';
const port = 5000;

const app = new Application();

console.log(`Server running on port ${port}`);

await app.listen({ port })


