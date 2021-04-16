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
                url="https://api.mapbox.com/styles/v1/rjmh/cknjodfve02vj17nxm4l7ozag/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoicmptaCIsImEiOiJja25qb2ZwbDAwMnExMnVwOHlrc2JnMDA4In0.5jx8qYdXib2SEZh9VXpciw"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
            />
        </MapContainer>
    );
};

export default Map;
