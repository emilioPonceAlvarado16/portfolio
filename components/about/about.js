

export const  About =(props)=>{

const logo_name={
    fontSize:'1.5em',
    color:"white",
    padding:'20px 20px 0px 25px',
    justifyContent:'left'
   
}
const space={

    paddingLeft:'15%',
    paddingRight:'15%',

}



return (

    <article className="message " style={space}>
  <div className="message-header">
    <p>About</p>
  </div>
  <div className="message-body">
Hi!, I´m Isaias, over the years I´ve built up a diverse range of skills and qualities and I´m completly sure that are very useful for my career. I´m very good with corporate clients because I understand that their business needs to be successful. Here is my<a target="_blank"  rel="noreferrer"href="https://portfolio-isaias.s3.us-east-2.amazonaws.com/Isaias_Ponce_CV.pdf"> <strong > resume</strong> </a>, where you will find more information, and finally here I´m listing my recent repositories.</div>
</article>
)
}