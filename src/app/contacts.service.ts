import { Inject, Injectable } from '@angular/core';
import { EMPTY, filter, map, Observable, of } from 'rxjs';
import { ContactType } from './model/contact.type';
import { Contact } from './model/contact';
import { contactsInjectionToken } from './contacts';

@Injectable()
export class ContactsService {
  constructor(@Inject(contactsInjectionToken) private contactsList: Contact[]) {
  }

  public getContacts(): Observable<Contact[]> {
    return of(this.contactsList);
  }

  public setTypeOfContacts(chosenElement: ContactType): void {
  }
}
