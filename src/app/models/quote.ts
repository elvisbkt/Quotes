export class Quote {
  showDetails: boolean;
  constructor(
    public id = 1,
    public author: string,
    public quote: string,
    public postedBy: string,
    public timePosted: Date,
    public upVote: number,
    public downVote: number
) {
    this.showDetails = false;
  }
}
