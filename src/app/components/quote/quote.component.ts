import { Component, OnInit } from '@angular/core';
import { Quote } from '../../models/quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote(1, 'King John', 'Victorious warriors win first and then go to war', 'Junius', new Date(2019, 1, 30), 2, 0),
    new Quote(2, 'Unknown', 'I hate war as only a soldier who has lived it can', 'Brutus', new Date(2019, 2, 30), 3, 0),
    new Quote(3, 'McCain', 'It was misreported then, and it is misremembered now.', 'Caesar', new Date(2019, 3, 30), 4, 0)
  ];

  addQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength++;
    quote.timePosted = new Date(quote.timePosted);
    this.quotes.unshift(quote);
    console.log(this.quotes);
  }

  showQuoteDetails(index) {
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
    console.log(this.quotes[index]);
  }

  deleteQuote(isToDelete, index) {
    if (isToDelete) {
      const toDelete = confirm(`Are you sure you want to delete "${this.quotes[index].quote}"`);
      if (toDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }
  mostUpVotes(index) {
    const checkQuote = this.quotes[index].upVote;
    if (this.quotes.length > 0) {
      const votes = [];
      this.quotes.forEach(quote => votes.push(quote.upVote));
      if (checkQuote === Math.max(...votes)) {
        return true;
      }
    }
  }

  constructor() { }

  ngOnInit() {

  }

}
