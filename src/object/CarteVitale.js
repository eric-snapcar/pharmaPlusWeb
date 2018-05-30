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
      return DateService.display(new Date());
      /*
      if(this.timestamp != null){
          return DateService.display(new Date());
      }
      return null;
      */
    }
}
