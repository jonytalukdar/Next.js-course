import { useRouter } from 'next/router';

const DetailPage = () => {
  const router = useRouter();

  const newsId = router.query.newsId;

  //send a request to the backend api
  // fetching newsDetail with the help of newsId

  return <h1>The Detail page</h1>;
};

export default DetailPage;
