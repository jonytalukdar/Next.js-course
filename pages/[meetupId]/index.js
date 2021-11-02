import { useRouter } from 'next/router';
import MeetupDetail from '../../components/meetups/MeetupDetail';

const MeetupDetailPage = () => {
  const router = useRouter();

  const meetupId = router.query.meetupId;

  return (
    <MeetupDetail
      title="first Meetup"
      image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg"
      alt="first meetup"
      address="Some city and some street"
      description="This Is Description"
    />
  );
};

export default MeetupDetailPage;
