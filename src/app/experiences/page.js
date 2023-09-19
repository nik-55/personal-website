import ItemCard from '@/components/ItemCard';
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
          <ItemCard
            key={experience.id}
            title={experience.org}
            description={experience.description}
            external={experience.external}
            endpoint={`experiences/${experience.slug}`}
          />
        );
      })}
    </div>
  );
};

export default page;
