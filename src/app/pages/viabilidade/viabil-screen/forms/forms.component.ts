import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {
  @Input() label: string = '';
  @Input() tipo: string = '';
}
