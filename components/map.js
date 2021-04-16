import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";

const Map = ({ lat, lng }) => {
    console.log({ lat, lng });
    return (
        <MapContainer
            center={[lat, lng]}
            zoom={14}
            scrollWheelZoom={false}
            style={{ height: "100%", width: "100%" }}
        >
            <TileLayer
                url="https://api.mapbox.com/styles/v1/rjmh/ckkbqic0c4fzt17ntqcy6bc43/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoicmptaCIsImEiOiJja2ticWgyYngwZWduMndwY2RjZmhtMjltIn0.QOeHWiCR4DqKvx-l5nzUvQ"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
            />
        </MapContainer>
    );
};

export default Map;
