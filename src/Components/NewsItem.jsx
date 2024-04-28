
import image from '../assets/news.jpeg'
const NewsItem = ({ title, description, src, url }) => {
    return (
        <>
        
            <div className="card bg-dark text-light  d-inline-block  m-3 p-3" style={{ maxWidth: "345px", height:'auto' }}>
                <img src={src?src:image} style={{ height: "200px", width: "300px" }} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title.slice(0-100)}</h5>
                    <p className="card-text">{description ? description.slice(0 - 100) : "Stay informed with our tailored news updates, delivering the latest developments from around the globe straight to your screen. From breaking stories to in-depth analysis, we provide a personalized glimpse into the world's events, keeping you ahead and in-the-know."}</p>
                    <a href={url} className="btn btn-primary">Read More</a>
                </div>
            </div>
           
        </>
    )
}

export default NewsItem
