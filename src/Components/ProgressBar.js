import React, {useEffect} from 'react';





function ProgressBar({progress}) {
  const [value, setValue] = React.useState("0");
  const [restart, setrestart] = React.useState(0);
  

  useEffect(() => {
    setrestart(0)
    setTimeout(function(){ setValue(progress);
      setrestart(1) }, 800);
  },[progress]);


  const fillerStyles = {
    height: '100%',
    width: `${value}`,
    transition: `width 60s ease-in`,
    borderRadius: 'inherit',
  }



  return restart?(
    <>
      <div className="progress ">
        <div className="progress-bar progress-bar-striped bg-warning" 
        style={fillerStyles}>
        </div>
      </div>

    </>
  ):
  (<>
   <div className="progress ">
   <div className="progress-bar progress-bar-striped bg-warning" 
        style={{width:"0%"}}>
        </div>
   </div>
  </>);
}

export default ProgressBar;