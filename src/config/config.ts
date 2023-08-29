require('dotenv').config();
const RESOURCE_URL: string = process.env.RESOURCE_URL ?? '';
const CONFIG: string = process.env.CONFIG ?? '';

export const env: {
  PORT: number
  RESOURCE_URL: string
  CONFIG: string
} = {
  PORT: 3000,
  RESOURCE_URL,
  CONFIG,
}