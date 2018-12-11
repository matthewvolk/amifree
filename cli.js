#!/usr/bin/env node

const [,, ...args] = process.argv;
const now = new Date().toISOString();

const reqBody = {
  "timeMin": now,
  "timeMax": "",
  "items": [
    {
      "id": "matt@commerceacceleration.com"
    }
  ]
}

console.log(reqBody);
console.log(args);