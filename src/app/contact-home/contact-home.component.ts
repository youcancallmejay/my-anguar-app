import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-home',
  standalone: true,
  imports: [],
  templateUrl: './contact-home.component.html',
  styleUrl: './contact-home.component.css'
})
export class ContactHomeComponent {
  isUnchanged = true; 


  onCancel(event?: KeyboardEvent) { 
    const evtMsg = event ? ' Event target is ' + (event.target as HTMLElement).textContent : ''; 
    alert('Cancelled.' + evtMsg); 
  }
  constructor() { }
 
  ngOnInit(): void {  }
}
