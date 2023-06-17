const Buttons = ({ refetch, saveActivity }) => {
  return (
    <>
      <button
        className="btn btn-primary"
        onClick={refetch}
        style={{ verticalAlign: 'middle' }}
      >
        🔃 Generate Activity
      </button>
      <button
        className="btn btn-secondary"
        onClick={saveActivity}
        style={{ verticalAlign: 'middle' }}
      >
        🕔 Save for Later
      </button>
    </>
  );
};

export default Buttons;
