import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../../models/quote';
@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  @Input () quote: Quote;
  @Output () isToDelete = new EventEmitter<boolean>();

  deleteQuote(quoteDeleted: boolean) {
    this.isToDelete.emit(quoteDeleted);
  }
  addUpVote() {
    this.quote.upVote ++;
  }

  addDownVote() {
    this.quote.downVote ++;
  }
  constructor() { }

  ngOnInit() {
  }

}
