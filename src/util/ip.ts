import { Request, Response } from 'express';
import env from 'src/config/config';

export const getClientIp = async (req: Request): Promise<string> => {
  const { ip, ips, headers } = req

  if (!ip || ip.includes('::')) return env.PUBLIC_IP

  return ip
}