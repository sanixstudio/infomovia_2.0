import Redis from "ioredis"

export const client = new Redis("rediss://default:********@usw1-light-horse-33207.upstash.io:33207");

await client.set('foo', 'bar');