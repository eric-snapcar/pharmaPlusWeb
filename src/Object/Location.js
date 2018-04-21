export default class Location {
  // MARK: class override
    constructor(json){
        if ( json ) {
            this.coordinates = {lat:json.coordinates.lat,lng:json.coordinates.lng};
            this.timestamp = json.timestamp;
        }
    }
}
