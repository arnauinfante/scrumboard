import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'scrumboard';

  itemsTODO  = ["eat", "take a shower", "work", "drive"];
  itemsPROGRESS  = ["programming", "wait for food"];
  itemsREVISION  = ["make bed"];
  itemsDONE  = ["wake up", "brush my teeth", "have breakfast", "dress up"];

  onDrop(event: CdkDragDrop<string[]>){
    if(event.previousContainer === event.container){
      moveItemInArray(event.container.data,
        event.previousIndex,
        event.currentIndex);
    }else{
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex, event.currentIndex);
    }
  }
}
