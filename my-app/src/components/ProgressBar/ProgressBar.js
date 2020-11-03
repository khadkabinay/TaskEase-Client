import React from 'react' 

const ProgressBar =(props) =>{
    console.log(props.userProgress.tasks.length)
 return (
            <div className="progress mb-2"  style={{width: "100%", height:"15%" }}>
                <div className="progress-bar" role="progressbar" style={{width: `${ props.userProgress.tasks.length + 40}%`}} aria-valuenow={0}  aria-valuemax={props.userProgress.tasks.length + 93}>{props.userProgress.name}  { props.userProgress.tasks.length + 30}%</div><br></br>
            </div>
       
        )
}


export default ProgressBar;
