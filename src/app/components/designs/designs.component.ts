import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-designs',
  templateUrl: './designs.component.html',
  styleUrls: ['./designs.component.scss']
})
export class DesignsComponent implements OnInit {
  designs = [
    {
      title: "Pen Ad",
      description: "A nonangular ad design using a Namiki fountain pen.",
      img: "../../../assets/WhiteAlNonangularAd.jpg",
      tech: [
        "Photoshop",
        "InDesign"
      ]
    },
    {
      title: "Othello Poster",
      description: "Poster using a quote from William Shakespeare's Othello.",
      img: "../../../assets/othello-poster-design.jpg",
      tech: [
        "Photoshop",
        "InDesign"
      ]
    },
    {
      title: "Exhibition Flyer",
      description: "Flyer for a fictional exhibition on the steel industry in Pittsburgh.",
      img: "../../../assets/Flyer.jpg",
      tech: [
        "Photoshop",
        "InDesign"
      ]
    },
    {
      title: "Textural Invitation",
      description: "Invitation to a fictional event using a textural background.",
      img: "../../../assets/WhiteAlTexture.jpg",
      tech: [
        "InDesign"
      ]
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
