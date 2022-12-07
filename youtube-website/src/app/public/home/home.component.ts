import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  videos = [  
    {
      title: 'Angular Tutorial for Beginners - 1 - Introduction',
      url: 'https://www.youtube.com/embed/k5E2AVpwsko',
      description: 'This is the first video in the Angular Tutorial for Beginners series. In this video we will learn about the Angular framework and what it is used for. We will also learn about the Angular CLI and how to install it.'
    },
    {
      title: 'Angular Tutorial for Beginners - 2 - Setup',
      url: 'https://www.youtube.com/embed/2OHbjep_WjQ',
      description: 'This is the second video in the Angular Tutorial for Beginners series. In this video we will learn how to setup the Angular CLI and create a new Angular project.'
    },
    {
      title: 'Angular Tutorial for Beginners - 3 - Components',
      url: 'https://www.youtube.com/embed/Fdf5aTYRW0E',
      description: 'This is the third video in the Angular Tutorial for Beginners series. In this video we will learn about components and how to create them.'
    },
 
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
