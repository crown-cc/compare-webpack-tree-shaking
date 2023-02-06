import { ajv } from "./middle"

if (process.env.NODE_ENV !== 'production') {
  useAjv()
}

console.log(1)