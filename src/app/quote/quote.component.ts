import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote(1, 'Emilia Clarke', 'I surrendered my heart to you the day we met', new Date(2010, 2, 18)),
    new Quote(2, 'Stefflon Don','The story of my life is all about you,my love', new Date(2009, 0, 7)),
    new Quote(3, 'Chris Adams','Ill love you,honour you,cherish you till the day I die', new Date(1970, 6, 26)),
    new Quote(4, 'Pablo Lyle','Lying beside you make me feel blessed', new Date(2001, 11, 12)),
  ]
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.completeDate =new Date (quote.completeDate)
    this.quotes.push(quote)
  }
  deleteQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}`)

      if (toDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }

  toogleQuote(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }


  constructor() { }
  ngOnInit() {
  }

}
