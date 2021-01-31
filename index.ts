import { Ring } from './lib/ring'

const ring: Ring = new Ring(process.env.RING_REFRESH_TOKEN!, true);

ring.saveSnippet(10, './example.mp4');