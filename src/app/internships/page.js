import NotionPage from '@/components/NotionPage';
import notion from '@/lib/notion'; 

async function notionpage() {
  const recordMap = await notion.getPage('abeb551c585e4ab2b14a020e4b7e7fa6');
  return recordMap;
}

const page =  async() => {
  const recordMap = await notionpage();
  return (
    <>
    <NotionPage recordMap={recordMap}/>
    </>
  )
};

export default page;
