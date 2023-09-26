/**
 * @file contains the blog cards
 */

import { notionDbQuery } from '@/services/notion';
import ItemCard from '@/components/ItemCard';

const page = async () => {
  const data = await notionDbQuery('blogs');

  return (
    <div className='blogs-container'>
      {data.map((ele) => {
        const blog = {
          id: ele.id,
          external: ele.properties.external.url,
          slug: ele.properties.slug.url,
          title: ele.properties.title.rich_text[0].plain_text,
          description: ele.properties.description.rich_text[0].plain_text,
        };
        return (
          <ItemCard
            key={blog.id}
            title={blog.title}
            description={blog.description}
            external={blog.external}
            endpoint={`blogs/${blog.slug}`}
          />
        );
      })}
    </div>
  );
};

export default page;
