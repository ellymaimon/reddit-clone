export class Article {
    public comments: number = 0;
    public upvotes: number = 0;

    constructor( 
        public id: number,
        public title: string,
        public category: string,
        public subreddit: string,
        public timePosted: string,
        public user: string,
        public img: string,
    ) {}
}