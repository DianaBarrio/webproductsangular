import { Component, Input, OnInit, Output } from '@angular/core';
import { Item } from 'src/app/models/item';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() item: Item= new Item();
  @Output() deleteItem: EventEmitter<Item> = new EventEmitter();
  @Output() toggleItem: EventEmitter<Item> = new EventEmitter();
  
  constructor() { }
  
  ngOnInit(): void {
      
  }

  OnDelete(item:Item){ 
    this.deleteItem.emit(item);

  }
  OnToggle(item:Item){ 
    item.completed =!item.completed;
    this.toggleItem.emit(item);
  
  }


}
