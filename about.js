```javascript
//pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <Link href="/about">
        <a>Go to About</a>
      </Link>
    </div>
  );
}
```
```javascript
//pages/about.js

export default function About() {
  return (
    <div>
      <h1>About Page</h1>
      {/* This will cause an error because it's trying to render before the data is fetched */}
      <p>This is the about page. The data is {data}</p>
    </div>
  );
}

//This will cause a runtime error in production. 
export async function getServerSideProps(){
    const res = await fetch('https://rickandmortyapi.com/api/character');
    const data = await res.json();

    return {
        props: {
data}
    }
}
```