import { Server } from "../typing";

export const SERVERS: Server[] = [
  { url: "https://does-not-work.perfume.new", priority: 1 },
  { url: "https://gitlab.com", priority: 4 },
  { url: "http://app.scnt.me", priority: 3 },
  { url: "https://offline.scentronix.com", priority: 2 },
];

export const TIMEOUT = 5000;
