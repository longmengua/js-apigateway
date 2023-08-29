import { env } from 'process';
import { JSDOM } from 'jsdom';

// manipulate HTML
export const manipulateHTML = (html: string): string => {
  const dom = new JSDOM(html);
  const document = dom.window.document;

  // Manipulate the document
  const configScript = document.createElement('script');
  configScript.textContent = `window.config = ${JSON.stringify(env.CONFIG)}`;
  document.body.appendChild(configScript);

  // Convert the manipulated DOM back to an HTML string
  const htmlContentString = document.documentElement.outerHTML;
  return htmlContentString;
}