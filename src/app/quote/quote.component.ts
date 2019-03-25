import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote(1, 'I surrendered my heart to you the day we met', 'Emilia Clarke', new Date(2019, 2, 18)),
    new Quote(2, 'The story of my life is all about you,my love', 'Stefflon Don', new Date(2019, 0, 7)),
    new Quote(3, 'Ill love you,honour you,cherish you till the day I die', 'Chris Adams', new Date(2019, 6, 26)),
    new Quote(4, 'Lying beside you make me feel blessed', 'Yual Pablo', new Date(2019, 11, 12)),
    new Quote(5, 'Ill forever carry you and hold you in my heart', 'Terrence J', new Date(2019, 5, 1)),
    new Quote(6, 'We are tangled,knotted,locked,and tied to each other forever', 'William Shakespere', new Date(2019, 7, 27)),
    new Quote(7, 'Surely,am being rewarded cause I have you', 'Harry Potter', new Date(2019, 12, 18)),
    new Quote(8, 'Saying you are beautiful is an understatement', 'Oruko Pius', new Date(2019, 6, 23)),
  ]
  deleteQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you wantto delete ${this.quotes[index].name}`)

      if (toDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }

  toogleDetails(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.completeDate =new Date (quote.completeDate)
    this.quotes.push(quote)
  }


  constructor() { }
  ngOnInit() {
  }

}
