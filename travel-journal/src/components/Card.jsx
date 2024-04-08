import "../components/Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

function Card(props) {
  return (
    <div className="card">
      <img src={props.item.imageUrl} alt="image" className="card__image" />
      <div>
        <div className="flex--flow">
          <FontAwesomeIcon icon={faLocationDot} className="card__icon" />
          <p className="card__country">{props.item.location}</p>
          <a href={props.item.googleMapsUrl} className="card__location">
            View on Google Maps
          </a>
        </div>
        <h1 className="card__title">{props.item.title}</h1>
        <p className="card__date">
          {props.item.startDate} - {props.item.endDate}
        </p>
        <p className="card__description">{props.item.description}</p>
      </div>
    </div>
  );
}

export default Card;
