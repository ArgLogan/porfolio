import "./Banner.css"

const Banner = (props)=>{
    const {banner} = props
    const {avatar} = props
    const {about} = props

    return <div className="container">
        <div className="banner">
            <img src={banner} alt="banner" />
        </div>
        <div className="avatar">
            <img src={avatar} alt="avatar" />

        </div>
        <div className="about">
            <h1>{about}</h1>
        </div>
        <div className="redsocial redup">
            <a className="icon" href="https://www.linkedin.com/in/juan-jos%C3%A9-roma-11310a36/" target="_blank"><i className="fab fa-linkedin-in"></i></a>
           
        </div>
        <div className="redsocial reddown">
            <a className="icon" href="https://www.linkedin.com/in/juan-jos%C3%A9-roma-11310a36/" target="_blank"><i className ="fab fa-github"></i></a>
           
        </div>
        <div className="redsocial redright">
            <a className="icon" href="https://www.linkedin.com/in/juan-jos%C3%A9-roma-11310a36/" target="_blank"><i className ="fab fa-twitter"></i></a>
           
        </div>
        <div className="redsocial redleft">
            <a className="icon" href="https://www.linkedin.com/in/juan-jos%C3%A9-roma-11310a36/" target="_blank"><i className ="fas fa-envelope"></i></a>
           
        </div>
        <div className="redsocial redcent">
            <a className="icon" href="https://www.linkedin.com/in/juan-jos%C3%A9-roma-11310a36/" target="_blank"><i className ="fab fa-whatsapp"></i></a>
           
        </div>
        

    </div>
}

export default Banner