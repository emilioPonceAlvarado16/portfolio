import 'bulma/css/bulma.min.css'
import Link from 'next/link'
const repo_style={
    paddingLeft:'10%',
    paddingRight:'10%',
    paddingBottom:'10%'
}

const opacidad={
opacity:'0.8',
//backgroundColor:"#00CEA7"
  }
  

export const  Repository =(props)=>{

    const {name, description, url }=props;
    
    
    return (
        <>
        <div className="container is-2by2 " style={repo_style}>
        <div className="card " >
       
        <div className="card-content" style={opacidad}>
          <div className="media">
            <div className="media-left">
              
            </div>
            <div className="media-content">
              <p className="title is-4">{name}</p>
              <p className="subtitle is-6">@emilioPonceAlvarado16</p>
            </div>
          </div>
      
          <div className="content">
            {description} 
            <Link href={url} passHref={true}> @link </Link>

          
            <br/>
          </div>
        </div>
        </div>
      </div>
      </>
    )
    }