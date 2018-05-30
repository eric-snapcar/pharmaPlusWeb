export default class DateService {
  static display(date){
      return moment(date).format('dddd D MMMM h:mm');
  }
}
