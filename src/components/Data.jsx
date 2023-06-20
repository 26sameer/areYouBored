import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import CtaButtons from './CtaButtons';
import Footer from './Footer';
const URL = 'https://www.boredapi.com/api/activity/';

const Data = () => {
  const fetchActivity = () => {
    return axios.get(URL);
  };

  const {
    data: activity,
    isLoading,
    isFetching,
    error,
    refetch,
  } = useQuery({
    queryKey: ['activity'],
    queryFn: fetchActivity,
  });

  const saveActivity = activity => {
    // Get array from local storage, defaulting to empty array if it's not yet set
    var activityList = JSON.parse(localStorage.getItem('activityList') || '[]');

    var savedActivity = {
      activityName: activity?.data?.activity,
      type: activity?.data?.type,
      participants: activity?.data?.participants,
      key: activity?.data?.key,
    };
    activityList.push(savedActivity);
    localStorage.setItem('activityList', JSON.stringify(activityList));
    // alert('Activity Saved');
  };

  return (
    <>
      <div className="data">
        {isLoading || isFetching ? (
          <h3>Fetchin you a new Activity😉...</h3>
        ) : !!activity?.data?.error || error ? (
          <h2>Error: {activity?.data?.error || error.code}🙁</h2>
        ) : (
          <>
            <h3 style={{ textTransform: 'uppercase', verticalAlign: 'middle' }}>
              {activity?.data?.activity && <span>➡ </span>}
              {activity?.data?.activity}
            </h3>
            <p style={{ textTransform: 'uppercase' }}>
              Category:{' '}
              <strong>
                <em> {activity?.data?.type}</em>
              </strong>
            </p>
            {activity?.data?.link && (
              <>
                <button className="btn btn-secondary">
                  <a
                    style={{ textDecoration: 'none', color: '#f7fbef' }}
                    href={activity?.data?.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    ↗️ Learn More
                  </a>
                </button>
              </>
            )}
            {activity.data?.participants && (
              <p>
                Number of Participants Required:{' '}
                <strong>
                  <em>{activity?.data?.participants}</em>
                </strong>
              </p>
            )}
          </>
        )}

        <CtaButtons
          refetch={refetch}
          saveActivity={() => saveActivity(activity)}
        />
      </div>
      <Footer />
    </>
  );
};

export default Data;
