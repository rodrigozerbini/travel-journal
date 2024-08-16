import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Trip(props) {

    const item = props.item
    return (
        <div>
            <div className="card-container">
                <img src={item.image} className="trip-image" alt="Trip image" />
                <div className="card-info">
                    <section className="location-info">
                        <div className="location-line">
                            <i className="bi bi-geo-alt-fill location-icon"></i>
                            <p className="country">{item.location.toUpperCase()}</p>
                            <a href={item.googleMapsUrl} className="location-link">View on Google Maps</a>
                        </div>
                    </section>
                    <h2 className="title">{item.title}</h2>
                    <h3 className="date">{item.startDate} - {item.endDate}</h3>
                    <p className="description">{item.description}</p>
                </div>
            </div>
        </div>
    )
}