import * as os from 'os';
import axios from 'axios';

async function getPublicIP() {
  try {
    const response = await axios.get('https://api64.ipify.org');
    return response.data;
  } catch (error) {
    console.error('Failed to fetch public IP:', error.message);
    return 'N/A';
  }
}

async function getInternalIP() {
  const interfaces = os.networkInterfaces();
  for (const interfaceName of Object.keys(interfaces)) {
    const addresses = interfaces[interfaceName];
    for (const address of addresses) {
      if (address.family === 'IPv4' && !address.internal) {
        return address.address;
      }
    }
  }
  return 'N/A';
}

function displayIPInfo(internalIP: string, publicIP: string, port: number) {
  console.log('')
  console.log(`\tInternal IP: http://${internalIP}:${port?.toString()}`);
  console.log(`\tPublic IP: http://${publicIP}:${port?.toString()}`);
  console.log('')
}

export const urlInfo = async (port: number) => {
  const internalIP = await getInternalIP();
  const publicIP = await getPublicIP();

  displayIPInfo(internalIP, publicIP, port);
}