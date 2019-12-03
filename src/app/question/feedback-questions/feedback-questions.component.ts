import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback-questions',
  templateUrl: './feedback-questions.component.html',
  styleUrls: ['./feedback-questions.component.css']
})
export class FeedbackQuestionsComponent implements OnInit {
  qtnsList=[];
  constructor() { }
  
  ngOnInit() {
    this.qtnsList= [
      { id:1, qtn: "question1",  anscount: 5,   feedbacktype: 'unregistered'  },
    ];
  }
}
