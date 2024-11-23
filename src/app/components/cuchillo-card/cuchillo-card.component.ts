import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cuchillo } from '../../types/cuchillo';

@Component({
  selector: 'app-cuchillo-card',
  standalone: true,
  imports: [],
  templateUrl: './cuchillo-card.component.html',
  styleUrl: './cuchillo-card.component.css'
})
export class CuchilloCardComponent {

@Input() cuhcillo!:Cuchillo;

@Output() delteEvent =new EventEmitter<string>;
@Output() detailEvent =new EventEmitter<string>;

onDelete(){
  this.delteEvent.emit(this.cuhcillo.id);
}
onDetail(){
  this.detailEvent.emit(this.cuhcillo.id);
}

}
