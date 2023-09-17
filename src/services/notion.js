import { NotionAPI } from 'notion-client';
import { Client } from '@notionhq/client';

const notion = new Client({
  auth: process.env.NEXT_PUBLIC_NOTION_TOKEN,
});
const notionx = new NotionAPI();

export { notionx, notion };
