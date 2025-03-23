import { Component, EventEmitter, Input, model, output, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent {

  searhButonClick = output({alias: 'submit'});

 search = model<string>("search");

  searchClick(){
    this.searhButonClick.emit();
  }

}
