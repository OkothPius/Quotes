import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any): number {
    let today:Date = new Date(); //get currentr date and nativeElement
    let todayWithNoTime:any = new Date(today.getFullYear(),today.getMonth(),today.getDate())
    var dateDifference =Math.abs(value-todayWithNoTime) //returns value in milliseconds
    const secondsInADay= 86400; //60sec*60min in an hour *24hrs

    var dateDifferenceSeconds=dateDifference*0.001; //converts to seconds

    var dateCounter=dateDifferenceSeconds/secondsInADay;

    if (dateCounter >= 1 && value > todayWithNoTime){
      return dateCounter
    }else{
      return 0;
    }

  }

}
