import { Component } from '@angular/core';
import {DropEvent} from 'ng-drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  appData = [
    { name: 'SpreadSheet Name', type: 'sheet' },
    { name: 'Row ID', type: 'sheet' },
    { name: 'Row No', type: 'sheet' },
    { name: 'Column', type: 'sheet' },
    { name: 'col-1', type: 'column' },
    { name: 'col-2', type: 'column' },
    { name: 'col-3', type: 'column' },
    { name: 'col-4', type: 'column' }
]

droppedSheetdata = [];
droppedItems = [];
dragEnabled = true;


onSheetDrop(e: DropEvent) {
  this.droppedSheetdata.push(e.dragData);
  this.removeItem(e.dragData, this.appData);
}

onDrop(e: DropEvent) {
  this.droppedItems.push(e.dragData);
  this.removeItem(e.dragData, this.appData);    
}

removeItem(item: any, list: Array<any>) {
  let index = list.map(function (e) {
    return e.name
  }).indexOf(item.name);
  list.splice(index, 1);
}
}
