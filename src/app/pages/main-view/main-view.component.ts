import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Board } from 'src/app/models/board.model';
import { Column } from 'src/app/models/column.model';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {

  constructor() { }

  board: Board = new Board('Test Board', [
    new Column('Ideas', [
      "Some idea",
      "Another idea",
      "Yet another idea"
    ]),
    new Column('Todo', [
      "Do this one thing",
      "Do some other thing",
      "Do one more thing"
    ]),
    new Column('Done', [
      'Get up',
      'Brush teeth',
      'Take a shower',
      'Check email',
      'Walk cat'
    ]),
    new Column('Wishlist', [
      'Stuff about callbacks',
      'More stuff about Angular',
      'Yet more stuff'
    ])
  ]);

  ngOnInit(): void {
  }

  /* ideas = [
    'Something new',
    'Something different'
  ];

  todo = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep'
  ];

  done = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check email',
    'Walk cat'
  ];

  wishlist = [
    'Stuff about callbacks',
    'More stuff about Angular',
    'Yet more stuff'
  ]; */

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

}
