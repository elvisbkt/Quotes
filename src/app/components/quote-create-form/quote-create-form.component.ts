import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../../models/quote';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-quote-create-form',
  templateUrl: './quote-create-form.component.html',
  styleUrls: ['./quote-create-form.component.css']
})
export class QuoteCreateFormComponent implements OnInit {

  quotes = new Quote(1, '', '', '', new Date(), 0, 0);
  @Output () addNewQuote = new EventEmitter<Quote>();

  constructor() {

  }

  ngOnInit() {
  }
  submitQuote() {
    this.addNewQuote.emit(this.quotes);
    this.quotes = new Quote(1, '', '', '', new Date(), 0, 0);
  }
}
