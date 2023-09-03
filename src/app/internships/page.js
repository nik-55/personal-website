import Markdown from '@/components/Markdown';
import Image from 'next/image';

export const revalidate = 60;

async function getData() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/internships/`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
        },
      }
    );

    const res1 = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/imagecolls?populate=*`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
        },
      }
    );
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data');
    }

    const data1 = await res.json();
    const data2 = await res1.json();

    return [data1.data, data2.data];
  } catch (err) {
    throw new Error('Failed to fetch data');
  }
}

const page = async () => {
  const [data1, data2] = await getData();

  return (
    <>
      <Image
        src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${data2[0].attributes.profilepic.data.attributes.url}`}
        height={100}
        width={100}
        alt='profile-pic'
      />
      {data1.map((internship) => {
        const attr = internship.attributes;
        return (
          <div key={internship.id}>
            <h1>{attr?.title}</h1>
            <p>{attr?.organization}</p>
            <Markdown markdown={attr?.description} />
            <span>{attr?.startDate}</span>
            <span>{attr?.endDate}</span>
          </div>
        );
      })}
    </>
  );
};

export default page;
