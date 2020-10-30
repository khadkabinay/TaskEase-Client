import React from 'react' 

const ProgressBar =(props) =>{
 return (
    
     <div>
         <div>
         <progress value={props.value} max={props.max}>Binay</progress>
             ProgressBar goes here 
            {/* <div className="progress-bar" role="progressbar" style={{width:"25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div> */}
            
        </div>
     </div>
 )
}


export default ProgressBar;
