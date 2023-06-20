import { Tooltip } from 'react-tooltip';

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
        data-tooltip-id="my-tooltip"
        data-tooltip-place="top"
        data-tooltip-content="Saved"
        data-tooltip-delay-hide={1000}
      >
        🕔 Save for Later
      </button>
      <Tooltip id="my-tooltip" openOnClick="true" />
    </>
  );
};

export default Buttons;
