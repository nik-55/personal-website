import Link from 'next/link';
import { notionDbQuery } from '@/services/notion';

const page = async () => {
  const data = await notionDbQuery('blogs');

  return (
    <div className='blogs-container'>
      {data.map((ele, i) => {
        const post = {
          id: ele.id,
          external: ele.properties.external.url,
          slug: ele.properties.slug.url,
          title: ele.properties.title.rich_text[0].plain_text,
          description: ele.properties.description.rich_text[0].plain_text,
        };
        return (
          <div
            key={post.id}
            style={{ width: '100%', height: '100px' }}
            className='border border-secondary'
          >
            <h1>{post.title}</h1>
            <p>{post.description}</p>
            {post.external ? (
              <Link target={'_blank'} href={post.external}>
                Read more
              </Link>
            ) : post.slug ? (
              <Link href={`/blogs/${post.slug}`}>Read more</Link>
            ) : (
              ''
            )}
          </div>
        );
      })}
    </div>
  );
};

export default page;
