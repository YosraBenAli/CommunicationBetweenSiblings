import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-sibling1',
  templateUrl: './sibling1.component.html',
  styleUrls: ['./sibling1.component.css']
})
export class Sibling1Component implements OnInit {
  gender = ['male', 'female', 'other'];
  selectedGender: string;

  message: string;
  exercices = ['hello', 'hekfk', 'chien'];

  constructor(private data: DataService) {
  }

  newMessage() {
    this.data.changeMessage(this.selectedGender)
  }

  test($event) {
    console.log($event);
  }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message)
  }


}
