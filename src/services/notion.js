/**
 * @file contains the notion related functions
 */

import { NotionAPI } from 'notion-client';
import { Client } from '@notionhq/client';

// #region Notion API

/**
 * Notion API to query the notion database
 */

const notion = new Client({
  auth: process.env.NEXT_PUBLIC_NOTION_TOKEN,
});

/**
 * Query the notion database
 *
 * @param {string} database_name
 * @param {object} filter - notion query filter object
 * @returns {Array} - array of notion database objects
 */
async function notionDbQuery(database_name, filter) {
  try {
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
  } catch (err) {
    throw new Error('Error occured while fetching data from Notion');
  }
}

// #endregion Notion API

// #region React Notion Renderer

/**
 * React notion renderer to render the notion pages
 */

const notionx = new NotionAPI();

/**
 *
 * @param {string} id - notion page id
 * @returns {object} - react-notion-x specific object
 */
async function notionpage(id) {
  try {
    const recordMap = await notionx.getPage(id);
    return recordMap;
  } catch (err) {
    throw new Error('Error occured while creating record map');
  }
}

// #endregion React Notion Renderer

export { notionDbQuery, notionpage };
