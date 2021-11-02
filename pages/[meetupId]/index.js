import { useRouter } from 'next/router';

const MeetupDetailPage = () => {
  const router = useRouter();

  const meetupId = router.query.meetupId;

  return (
    <div>
      <h1>this is details page</h1>
      <h1>{meetupId}</h1>
    </div>
  );
};

export default MeetupDetailPage;
