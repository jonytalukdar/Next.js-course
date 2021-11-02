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

export const getStaticPaths = async () => {
  return {
    fallback: false,
    paths: [
      {
        params: { meetupId: 'm1' },
      },
      {
        params: { meetupId: 'm2' },
      },
    ],
  };
};

export const getStaticProps = async (context) => {
  //fetch data from api
  const meetupId = context.params.meetupId;
  console.log(meetupId);

  return {
    props: {
      meetupData: {
        id: meetupId,
        title: 'first meetup',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
        address: 'some address',
        description: 'some description',
      },
    },
  };
};

export default MeetupDetailPage;
