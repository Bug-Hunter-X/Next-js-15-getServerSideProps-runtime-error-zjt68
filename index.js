```javascript
//pages/about.js

export default function About({data}) {
  //Check if data exists before rendering
  if(!data) return <p>Loading...</p>;
  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about page. The data is {JSON.stringify(data, null, 2)}</p>
    </div>
  );
}

export async function getServerSideProps(){
    const res = await fetch('https://rickandmortyapi.com/api/character');
    const data = await res.json();

    return {
        props: {
data}
    }
}
```