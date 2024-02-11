import { useIsFocused } from "@react-navigation/native";
import { useEffect, useState } from "react";
import PlacesList from "../components/Places/PlacesList";
import { fetchPlaces } from "../util/database";

function AllPlaces({ route }) {
  const [loadedPlaces, setLoadedPlaces] = useState([]);

  // The First Time AllPlaces is loaded when the app starts we won't have any place in our route parameters . Instead that will only change after we add a place. Therefore we use useEffect so it should execute whenever this component gains focus.
  //And Can be achieved with useIsFocused hook

  const isFocused = useIsFocused();
  useEffect(() => {
    async function loadPlaces() {
      const places = await fetchPlaces();
      setLoadedPlaces(places);
    }

    if (isFocused) {
      // route.params means all parameters coming from AddPlace is there.
      loadPlaces();
      // setLoadedPlaces(curPlaces => [...curPlaces, route.params.place]);
    }
  }, [isFocused]);

  return <PlacesList places={loadedPlaces} />;
}

export default AllPlaces;
