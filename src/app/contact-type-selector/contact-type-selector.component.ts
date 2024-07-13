import { Component, EventEmitter, Output } from '@angular/core';
import { ContactType } from '../model/contact.type';

@Component({
  selector: 'app-contact-type-selector',
  templateUrl: './contact-type-selector.component.html',
  styleUrls: ['./contact-type-selector.component.css'],
})
export class ContactTypeSelectorComponent {
  public contactTypes = ContactType;
  public selectedContactType: ContactType = ContactType.ALL;
  @Output() contactEvent = new EventEmitter<ContactType>();

  
  changeContact(event: ContactType) {
    this.contactEvent.emit(event);
  }
}
