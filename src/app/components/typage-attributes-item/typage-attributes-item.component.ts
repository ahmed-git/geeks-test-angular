import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-typage-attributes-item',
  templateUrl: './typage-attributes-item.component.html',
  styleUrls: ['./typage-attributes-item.component.css']
})
export class TypageAttributesItemComponent implements OnInit {

  form: FormGroup;
  editable: Boolean;
  @Input() i: number;
  @Input() attribute: any;
  
  constructor(private fb: FormBuilder) { 
    this.editable = false;
    this.form = this.fb.group({
      synonymes: this.fb.array([
      ])
    });
  }

  ngOnInit() {
    
  }

  get synonymes() {
    return this.form.get('synonymes') as FormArray;
  }

  addSynonyme() {
    this.synonymes.push(this.fb.control('', Validators.required));
  }

  edit() {
    this.synonymes.enable();
  }


}
