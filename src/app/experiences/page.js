import Link from 'next/link';
import { notionDbQuery } from '@/services/notion';

const page = async () => {
  const data = await notionDbQuery('experiences');

  return (
    <div className='experiences-container'>
      {data.map((ele) => {
        const experience = {
          id: ele.id,
          external: ele.properties.external.url,
          slug: ele.properties.slug.url,
          role: ele.properties.role.rich_text[0].plain_text,
          description: ele.properties.description.rich_text[0].plain_text,
          org: ele.properties.org.rich_text[0].plain_text,
        };
        return (
          <div
            key={experience.id}
            style={{ width: '100%', height: '100px' }}
            className='border border-secondary'
          >
            <h1>{experience.org}</h1>
            <p>{experience.description}</p>
            {experience.external ? (
              <Link target={'_blank'} href={experience.external}>
                Read more
              </Link>
            ) : experience.slug ? (
              <Link href={`/experiences/${experience.slug}`}>Read more</Link>
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
