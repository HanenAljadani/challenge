import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown-menu',
  standalone: false,
  templateUrl: './dropdown-menu.component.html',
  styleUrl: './dropdown-menu.component.css'
})
export class DropdownMenuComponent {
  @Input() label:String = "";
  @Input() options:String [] = [];

  selectedOption: String = '';

  @Output() optionChanged = new EventEmitter<String>();

  onChange(option: String) {
    this.selectedOption = option;
    this.optionChanged.emit(option);  
  }
}
