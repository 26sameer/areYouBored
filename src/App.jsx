import { useLayoutEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);
  const url = 'http://www.boredapi.com/api/activity/';

  const fetchActivity = async () => {
    const response = await fetch(url);
    const body = await response.json();
    setData(body);
    console.log(body);
    return body;
  };

  useLayoutEffect(() => {
    fetchActivity();
  }, []);

  return (
    <>
      <div className="container">
        <h1>Are You Bored?</h1>
        <p>Try these amazing activities now!</p>
        <div className="data">
          <h3 style={{ textTransform: 'uppercase' }}>{data.activity}</h3>
          <p style={{ textTransform: 'uppercase' }}>
            Category:{' '}
            <strong>
              <em>{data.type}</em>
            </strong>
          </p>
          {data.link && (
            <button className="btn btn-primary">
              <a
                style={{ textDecoration: 'none', color: '#f7fbef' }}
                href={data.link}
                target="_blank"
                rel="noreferrer"
              >
                Learn More
              </a>
            </button>
          )}

          {data.participants && (
            <p>
              Number of Participants Required:{' '}
              <strong>
                <em>{data.participants}</em>
              </strong>
            </p>
          )}

          <button className="btn btn-primary" onClick={fetchActivity}>
            Generate Activity
          </button>
          <button className="btn btn-secondary">Save for Later!</button>
        </div>
      </div>
    </>
  );
}

export default App;
