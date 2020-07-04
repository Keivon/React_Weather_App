import React from 'react';





function ProgressBar() {
  return (
    <>
    <div className="progress">
  <div className="progress-bar bg-warning" role="progressbar"  
  aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>
    </>
  );
}

export default ProgressBar;