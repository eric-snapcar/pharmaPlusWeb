export default class UserOld {
  // MARK: class override
    constructor(json){
        if ( json ) {
            this.email = json.email;
        }
    }
}
