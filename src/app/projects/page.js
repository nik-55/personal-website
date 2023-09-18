import { notionDbQuery } from '@/services/notion';
import Card from '@/components/Card';

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
          <Card
            key={project.id}
            title={project.title}
            description={project.description}
            external={project.external}
            endpoint={`projects/${project.slug}`}
          />
        );
      })}
    </div>
  );
};

export default page;
