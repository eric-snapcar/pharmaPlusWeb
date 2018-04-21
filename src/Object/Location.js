export default class Location {
  // MARK: class override
    constructor(json){
        if ( json ) {
            if(json.coordinates){
                this.coordinates = {lat:json.coordinates.lat,lng:json.coordinates.lng};
            }else if(json.coordinate){
                this.coordinates = {lat:json.coordinate.lat,lng:json.coordinate.lng};
            }
            this.timestamp = json.timestamp;
        }
    }
}
