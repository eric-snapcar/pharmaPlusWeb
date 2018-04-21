export default class User {
  // MARK: class override
    constructor(json){
        if ( json ) {
            this.email = json.email;
        }
    }
}
