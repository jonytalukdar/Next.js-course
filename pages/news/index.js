import Link from 'next/link';

const NewsPage = () => {
  return (
    <>
      <h1>The News Page</h1>;
      <ul>
        <li>
          <Link href="/news/id">News Details</Link>
        </li>
        <li>
          <a href="">Something else</a>
        </li>
      </ul>
    </>
  );
};

export default NewsPage;
