import DateService from '../service/DateService';
export default class CarteVitale {
  // MARK: class override
    constructor(json){
        if ( json ) {
          this.email = json.email;
          this.imageUrl = json.file_path;
          this.timestamp = json.timestamp;
        }
    }
    descriptionDate(){
      if(this.timestamp != null){
          return DateService.display(this.timestamp);
      }
      return null;
    }
}
