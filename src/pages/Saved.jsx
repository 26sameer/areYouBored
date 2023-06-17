import { useState } from 'react';

const Saved = () => {
  var activityList = JSON.parse(localStorage.getItem('activityList') || '[]');
  const [act, setAct] = useState(activityList);

  return (
    <div className="saved">
      <div className="saved-top">
        <h1>Saved</h1>
        {activityList.length !== 0 && (
          <button
            className="btn btn-primary"
            style={{ verticalAlign: 'middle', marginLeft: '15px' }}
            onClick={() => {
              setAct('[]');
              localStorage.clear('activityList');
              localStorage.setItem('activityList', '[]');
            }}
          >
            🗑️ Clear Saved
          </button>
        )}
      </div>
      <div className="saved-data">
        {activityList.length === 0 ? (
          <p>No Saved Activities at the Moment</p>
        ) : (
          act.map(activity => {
            return (
              <div key={activity?.key} className="saved-border">
                <p style={{ textTransform: 'capitalize', width: '400px' }}>
                  <strong>
                    <span>➡ </span>Activity:{' '}
                  </strong>
                  {activity?.activityName}
                  <br />
                  <span className="type">
                    <strong>
                      <span>➡ </span>Type:{' '}
                    </strong>
                    {activity?.type}
                  </span>
                </p>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Saved;
