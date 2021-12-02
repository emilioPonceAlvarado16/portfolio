import 'bulma/css/bulma.min.css'

import Link from 'next/link'
const repo_style={
    paddingLeft:'10%',
    paddingRight:'10%',
    paddingBottom:'10%'
}

const opacidad={
opacity:'0.8',
  }
  

export const  Repository =(props)=>{

    const {name, description, url ,owner}=props;
    
    
    return (
        <>
        <div className="container is-2by2 " style={repo_style}>
        <div className="card " >
       
        <div className="card-content" style={opacidad}>
          <div className="media">
            <div className="media-left">
              
            </div>
              <p className="title is-4">{name}</p>
            <div className="media-content">
              <p className="subtitle is-6"></p>
            </div>
          </div>
      
          <div className="content">
        {description}<br/>@{owner}
            <Link href={url}> @link </Link>

          
            <br/>
          </div>
        </div>
        </div>
      </div>
      </>
    )
    }