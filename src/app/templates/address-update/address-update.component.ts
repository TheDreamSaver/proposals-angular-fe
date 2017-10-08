import { Component, OnInit } from '@angular/core';
import { AddressUpdate } from './addressupdate';

@Component({
  moduleId: module.id,
  selector: 'app-address-update',
  templateUrl: './address-update.component.html',
  styleUrls: ['./address-update.component.css']
})
export class AddressUpdateComponent implements OnInit {
  addressupdate = new AddressUpdate;

  constructor() { }

  ngOnInit() {
  }

}
