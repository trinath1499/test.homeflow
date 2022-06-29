import { useState, useEffect } from "react";
import Header from "./Header";
import PropertyCard from "./PropertyCard";

function App() {
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [savedProperties, setSavedProperties] = useState({});

  useEffect(() => {
    const fetchPropertyData = async () => {
      const response = await fetch("/property-data.json");
      const json = await response.json();

      setProperties(json.result.properties.elements);
    };

    fetchPropertyData();
  }, []);

  useEffect(() => {
    const filtered = properties.filter(
      (property) =>
        property.display_address
          .toLowerCase()
          .indexOf(searchText.toLowerCase()) > -1
    );
    setFilteredProperties([...filtered]);
  }, [searchText, properties]);

  const handleBookmarkClick = (property) => {
    const tempProperties = { ...savedProperties };
    if (tempProperties[property.property_id]) {
      delete tempProperties[property.property_id];
    } else {
      tempProperties[property.property_id] = property;
    }
    setSavedProperties({ ...tempProperties });
  };

  return (
    <div className="container mx-auto my-5">
      <Header searchText={searchText} setSearchText={setSearchText} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-5">
        {!!filteredProperties &&
          filteredProperties.map((property) => (
            <PropertyCard
              key={property.property_id}
              property={property}
              isSaved={savedProperties[property.property_id] != null}
              onBookmarkClick={handleBookmarkClick}
            />
          ))}
      </div>
    </div>
  );
}

export default App;
