import { Component, OnInit } from '@angular/core';
import { Quote } from '../../models/quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote(1, 'Gustavo', 'To try is to do', 'Junius', new Date(2001, 1, 30), 2, 0),
    new Quote(2, 'Hernandes', 'Ethic is the biggest thing in KE', 'Rekless', new Date(2016, 2, 30), 3, 0),
    new Quote(3, 'Gusto', 'You can only be what you can imagine.', 'Caesar', new Date(2019, 3, 30), 4, 0),
    new Quote(1, 'Jefe', 'Give thanks for life', 'Sicario', new Date(2019, 1, 30), 2, 0)
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
