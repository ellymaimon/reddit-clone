import { Article } from "./models/article.models";

var d = new Date("8/12/2018");
let milliseconds = d.getTime();

export const ARTICLES: Article[] = [
    new Article(1, "Local woman finds gravity still works", "Jobs", "r/KevinJobs", "6 hours ago", "KevinAhn812", "../assets/fall.gif"),
    new Article(2, "Man reunited with his long lost family", "Animals", "r/awww", "6 hours ago", "doglover12", "../assets/jordan.jpg"),
    new Article(3, "Dogs found to explode if enough pressure is applied", "Jobs", "r/KevinJobs", "5 hours ago", "KevinAhn812", "../assets/dog.gif"),
    new Article(4, "Local man found guilty of hoarding all kombucha", "Jobs", "r/KevinJobs", "18 days ago", "KevinAhn812", "../assets/abel.jpeg"),
    new Article(4, "High on life", "Jobs", "r/KevinJobs", "18 days ago", "KevinAhn812", "../assets/ryan.jpeg"),
    new Article(5, "Pips donut worker found guilty of losing perfect attendance", "Jobs", "r/KevinJobs", "3 years ago", "KevinAhn812", "../assets/elly.png"),
    new Article(6, "The queen is pissed", "Jobs", "r/KevinJobs", "5 minutes ago", "KevinAhn812", "../assets/queen.jpg"),
];