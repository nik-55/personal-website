import Link from 'next/link';
import { notionDbQuery } from '@/services/notion';

const page = async () => {
  const data = await notionDbQuery('projects');

  return (
    <div className='projects-container'>
      {data.map((ele) => {
        const project = {
          id: ele.id,
          external: ele.properties.external.url,
          slug: ele.properties.slug.url,
          title: ele.properties.title.rich_text[0].plain_text,
          description: ele.properties.description.rich_text[0].plain_text,
        };
        return (
          <div
            key={project.id}
            style={{ width: '100%', height: '100px' }}
            className='border border-secondary'
          >
            <h1>{project.title}</h1>
            <p>{project.description}</p>
            {project.external ? (
              <Link target={'_blank'} href={project.external}>
                Read more
              </Link>
            ) : project.slug ? (
              <Link href={`/projects/${project.slug}`}>Read more</Link>
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
