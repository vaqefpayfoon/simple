import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from "@angular/core";
import { ContactsService } from "../contacts.service";
import { Subject } from "rxjs";
import { Contact } from "../model/contact";
import { filter, map, takeUntil } from "rxjs/operators";
import { ContactTypeSelectorComponent } from "../contact-type-selector/contact-type-selector.component";
import { ContactType } from "../model/contact.type";

@Component({
  selector: "app-rolodex",
  templateUrl: "./rolodex.component.html",
  styleUrls: ["./rolodex.component.css"],
})
export class RolodexComponent implements OnInit, OnDestroy, OnChanges {
  public contacts: Contact[];
  public contact: Contact = null;
  private destroyed: Subject<any> = new Subject();

  @Input() contactType: ContactType;

  constructor(private contactsService: ContactsService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.contactType && changes.contactType.currentValue) {
      if(this.contactType != ContactType.ALL) {
        this.contactsService
        .getContacts()
        .pipe(map((el) => el.filter((x) => x.contactType == this.contactType)))
        .subscribe((contacts) => (this.contacts = contacts));
      } else {
        this.getContact();
      }
    }
  }

  public ngOnInit() {
    this.getContact();
  }

  getContact() {
    this.contactsService
    .getContacts()
    .pipe(takeUntil(this.destroyed))
    .subscribe((contacts) => (this.contacts = contacts));
  }
  public ngOnDestroy() {
    this.destroyed.next(null);
  }

  public setContact(contact: Contact): void {
    this.contact = contact;
  }
}
