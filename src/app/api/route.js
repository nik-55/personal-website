import { NextResponse } from 'next/server'
import { Client } from "@notionhq/client"

const notion = new Client({
  auth: process.env.NEXT_PUBLIC_NOTION_TOKEN,
}); 

export async function GET() {
  const myPage = await notion.databases.query({
    database_id: process.env.NEXT_PUBLIC_NOTION_DB,
  })
 
  return NextResponse.json({ data: myPage.results })
}