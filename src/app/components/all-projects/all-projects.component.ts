import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-projects',
  templateUrl: './all-projects.component.html',
  styleUrls: ['./all-projects.component.scss']
})
export class AllProjectsComponent implements OnInit {
  posts = [
      {
        title: "Calculator",
        link: "https://codepen.io/alcwhite/full/Paygqm/",
        img: "https://s3-us-west-2.amazonaws.com/i.cdpn.io/1705775.Paygqm.small.f8b74a7d-15f5-4e1f-ab47-9ec83924e8ab.png",
        description: "Calculator made with React.js and Sass for FreeCodeCamp.",
        tech: ["JavaScript", "React.js", "Sass"]
      },
      {
        title: "Pomodoro Clock",
        link: "https://codepen.io/alcwhite/full/xzQGmp/",
        img: "https://s3-us-west-2.amazonaws.com/i.cdpn.io/1705775.xzQGmp.cbdb9898-46c5-4913-a1c4-8a8293d042d0.png",
        description: "Pomodoro clock made with React.js for FreeCodeCamp. Choose a break time and a session time, click start, and work.",
        tech: ["JavaScript", "React.js", "CSS"]
      },
      {
        title: "Markdown Previewer",
        link: "https://codepen.io/alcwhite/full/MXVJOa/",
        img: "https://s3-us-west-2.amazonaws.com/i.cdpn.io/1705775.MXVJOa.46b9e47e-ca3e-4a69-941d-10f72aa39b4d.png",
        description: "App that takes input in Markdown format and translates it into display text. Uses React.js and Sass for FreeCodeCamp.",
        tech: ["JavaScript", "React.js", "Sass"]
      },
      {
        title: "Drum Machine",
        link: "https://codepen.io/alcwhite/full/EReqZa/",
        img: "https://s3-us-west-2.amazonaws.com/i.cdpn.io/1705775.EReqZa.b17b73ed-3809-48ea-bfd3-14e6edbea338.png",
        description: "Click any of the nine buttons or press the corresponding keys on your keyboard to hear a sound. Made with React.js and Sass for FreeCodeCamp.",
        tech: ["JavaScript", "React.js", "Sass"]
      },
      {
        title: "Tribute Page",
        link: "https://codepen.io/alcwhite/full/PaPxKp/",
        img: "https://s3-us-west-2.amazonaws.com/i.cdpn.io/1705775.PaPxKp.9fef6c54-50f8-4a9d-9409-c4f56d4f72d7.png",
        description: "Simple tribute page for FreeCodeCamp with information about one of my favorite artists: Marc Chagall.",
        tech: ["HTML", "Bootstrap", "CSS"]
      },
      {
        title: "Portfolio",
        link: "https://codepen.io/alcwhite/full/yvKZXK/",
        img: "https://s3-us-west-2.amazonaws.com/i.cdpn.io/1705775.yvKZXK.8f9fd69d-2ebc-4bbd-b45d-6e5377e3f6ff.png",
        description: "Simple portfolio page for FreeCodeCamp.",
        tech: ["HTML", "CSS"]
      },
      {
        title: "Random Quote Machine",
        link: "https://codepen.io/alcwhite/full/MXQedo/",
        img: "https://s3-us-west-2.amazonaws.com/i.cdpn.io/1705775.MXQedo.c4953c50-87c8-44dc-927f-8d7d5c65628c.png",
        description: "For FreeCodeCamp. Click on the 'New Quote' button to generate a random quote and background color.",
        tech: ["HTML", "Sass", "JavaScript"]
      },
      {
        title: "Technical Documentation",
        link: "https://codepen.io/alcwhite/full/XYdXPb/",
        img: "https://s3-us-west-2.amazonaws.com/i.cdpn.io/1705775.XYdXPb.9860fe7f-a27d-4f08-b41b-a65a3b65d863.png",
        description: "Documentation page for JavaScript. For FreeCodeCamp.",
        tech: ["HTML", "CSS", "JavaScript"]
      },
      {
        title: "Product Page",
        link: "https://codepen.io/alcwhite/full/QxjYVd/",
        img: "https://s3-us-west-2.amazonaws.com/i.cdpn.io/1705775.QxjYVd.17697af8-b68a-4a82-abad-1793e6f61c02.png",
        description: "Basic product page with information from Gemeinhardt's website. For FreeCodeCamp.",
        tech: ["HTML", "CSS"]
      },
      {
        title: "Survey Form",
        link: "https://codepen.io/alcwhite/full/YvyePJ/",
        img: "https://s3-us-west-2.amazonaws.com/i.cdpn.io/1705775.YvyePJ.33d642e2-44a4-4d1e-a89d-f997d6946fb5.png",
        description: "Form made for FreeCodeCamp.",
        tech: ["HTML", "CSS"]
      },
      {
        title: "Simple Blog",
        link: "https://basic-blog-project.herokuapp.com/blogs",
        img: "../../../assets/blog_thumbnail.png",
        description: "Blog with create, edit, and delete capabilities. For The Web Developer Bootcamp.",
        tech: ["Express", "Node", "SemanticUI", "MongoDB"]
      },
      {
        title: "YelpCamp",
        link: "https://mysterious-tundra-95450.herokuapp.com/",
        img: "../../../assets/yelpcamp_thumbnail.png",
        description: "Campground app with authorization, create, edit, and delete capabilities. Register, sign in, create a post, comment on a post. For The Web Developer's Bootcamp.",
        tech: ["MongoDB", "Express", "Node", "Bootstrap"]
      }
  ];
  constructor() { }

  ngOnInit() {
  }

}
