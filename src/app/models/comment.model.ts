export class Comment {
    public upvotes: number = 0;

    constructor( 
        public id: number,
        public articleId: number,
        public user: string,
        public time: string,
        public content: string
    ) {}
}