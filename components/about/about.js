

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
Hi!, I'm Isaias, over the years i've built up a diverse range of skills and qualities that i believe are very usefull for my career. I'm very good with customers because I understand for your business to be successful. Here is my<a href="www.google.com"> <strong > resume</strong> </a>, where you will find more information, and finally here i'm listing my recent repositories.</div>
</article>
)
}