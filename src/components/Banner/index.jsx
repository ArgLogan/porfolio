import "./Banner.css"

const Banner = (props)=>{
    const {banner} = props
    const {avatar} = props

    return <div className="container">
        <div className="banner">
            <img src={banner} alt="banner" />
        </div>
        <div className="avatar">
            <img src={avatar} alt="avatar" />

        </div>

    </div>
}

export default Banner