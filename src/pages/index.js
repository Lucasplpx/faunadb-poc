import useSWR from 'swr';

function Index() {
  const { data } = useSWR('/api/contacts');

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Olá LiveClass FaunaDB</h1>

      {data.data.map((contact) => (
        <>
          {contact.data.name} - {contact.data.email}
          <br />
          <hr />
        </>
      ))}

      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default Index;
