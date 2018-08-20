import { Article } from "./article.models";

var d = new Date("8/12/2018");
let milliseconds = d.getTime();

export let articleList: Article[] = [
    new Article("Kevin Gets Hired at Trailhead Marketing", "Jobs", "r/KevinJobs", "6 hours ago", "KevinAhn812", "../assets/article1.jpg"),
    new Article("Cute Dog", "Animals", "r/awww", "6 hours ago", "doglover12", "../assets/article1.jpg"),
    new Article("Kevin Gets Hired at Trailhead Marketing", "Jobs", "r/KevinJobs", "5 hours ago", "KevinAhn812", "../assets/article1.jpg"),
    new Article("Kevin Gets Hired at Trailhead Marketing", "Jobs", "r/KevinJobs", "18 days ago", "KevinAhn812", "../assets/article1.jpg"),
    new Article("Kevin Gets Hired at Trailhead Marketing", "Jobs", "r/KevinJobs", "3 years ago", "KevinAhn812", "../assets/article1.jpg"),
    new Article("Kevin Gets Hired at Trailhead Marketing", "Jobs", "r/KevinJobs", "5 minutes ago", "KevinAhn812", "../assets/article1.jpg"),
];