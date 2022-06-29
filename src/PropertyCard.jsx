import { FaBookmark } from "react-icons/fa";

function PropertyCard({ property, onBookmarkClick, isSaved }) {
  return (
    <div className="border-2 bg-gray-50">
      <div className="relative">
        <img
          src={`https://mr0.homeflow.co.uk/${property.photos[0]}`}
          alt={property.display_address}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null; // prevents looping
            currentTarget.src = "/placeholder-image.png";
          }}
        />

        <button
          className="absolute top-0 right-2"
          title="Click to bookmark this property"
          onClick={() => onBookmarkClick(property)}
        >
          <FaBookmark
            className={isSaved ? "text-red-400" : "text-yellow-400"}
            size="40"
          />
        </button>

        <p className="absolute bottom-0 right-0 px-2 py-1 border-t border-l bg-gray-50">
          {property.price}
        </p>
      </div>

      <div className="px-3 py-2">
        <p>{property.display_address}</p>
      </div>
    </div>
  );
}

export default PropertyCard;
