require('dotenv').config();
const RESOURCE_URL: string = process.env.RESOURCE_URL ?? '';
const CONFIG: string = process.env.CONFIG ?? '';
const IP_URL: string = process.env.IP_URL ?? '';
const PUBLIC_IP: string = '';

const env: {
  PORT: number
  RESOURCE_URL: string
  CONFIG: string
  IP_URL: string
  PUBLIC_IP: string
} = {
  PORT: 3000,
  RESOURCE_URL,
  CONFIG,
  IP_URL,
  PUBLIC_IP
}

export default env