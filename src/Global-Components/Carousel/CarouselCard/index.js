export default function CarouselCard(props) {

const {img, title, description} = props

    return (
        <div className="carousel-card">
                <img className="event" src={img} alt="beautiful route"/>
                    <div className="legend">
                        <h2>{title}</h2>
                        <p>{description}</p>
                    </div>
        </div>
    )}