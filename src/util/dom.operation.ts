import { JSDOM } from 'jsdom';
import axios from 'axios';
import env from 'src/config/config';

type ipInfoType = {
  query: string
  countryCode: string
  region: string
  country: string
  city: string
  zip: string
  lat: number
  lon: number
  timezone: string
}

const getIpInfo = async (clientIP: string): Promise<ipInfoType> => {
  const url: string = `${env.IP_URL}/${clientIP}`
  const { data } = await axios.get(url);
  const info: ipInfoType = {
    query: data?.query,
    countryCode: data?.countryCode,
    region: data?.region,
    country: data?.country,
    city: data?.city,
    zip: data?.zip,
    lat: data?.lat,
    lon: data?.lon,
    timezone: data?.timezone,
  }
  return info
}

// manipulate HTML
// export const m

// manipulate HTML
export const manipulateHTML = async (html: string, clientIP: string): Promise<string> => {
  const dom = new JSDOM(html);
  const document = dom.window.document;
  const ipInfo = await getIpInfo(clientIP);

  // Manipulate the document
  const configScript = document.createElement('script');
  configScript.textContent = `
    window.config = ${JSON.stringify(env.CONFIG)};
    window.ipInfo = ${JSON.stringify(ipInfo)};
  `;
  document.body.appendChild(configScript);

  // Convert the manipulated DOM back to an HTML string
  const htmlContentString = document.documentElement.outerHTML;
  return htmlContentString;
}