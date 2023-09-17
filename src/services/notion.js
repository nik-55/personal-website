import { NotionAPI } from 'notion-client';
import { Client } from '@notionhq/client';

const notion = new Client({
  auth: process.env.NEXT_PUBLIC_NOTION_TOKEN,
});
const notionx = new NotionAPI();

async function notionDbQuery(database_name, filter) {
  const res = await notion.databases.query({
    database_id: process.env.NEXT_PUBLIC_NOTION_DB,
    filter: {
      property: 'db_name',
      rich_text: {
        equals: database_name,
      },
    },
  });

  const database_id = res.results[0].properties.db_id.rich_text[0].plain_text;
  const data = await notion.databases.query({
    database_id,
    filter,
  });
  return data.results;
}

async function notionpage(id) {
  const recordMap = await notionx.getPage(id);
  return recordMap;
}

export { notionDbQuery, notionpage };
