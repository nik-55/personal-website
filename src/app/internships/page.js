import Markdown from '@/components/Markdown';

async function getData() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/internships/`,
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

  const data = await res.json();

  return data.data;
}

const page = async () => {
  const data = await getData();

  return (
    <>
      {data.map((internship) => {
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
