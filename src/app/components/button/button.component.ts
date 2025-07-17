import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: false,
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() text: String = "";

  @Output() buttonClicked = new EventEmitter<any>()

  clickButton(event: any){
    this.buttonClicked.emit(event)
  }

}
