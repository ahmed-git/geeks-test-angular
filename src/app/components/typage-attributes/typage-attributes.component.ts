import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormBuilder, Validators } from '@angular/forms';

import { TypageAttributesService } from 'src/app/services/typage-attributes.service';

@Component({
  selector: 'app-typage-attributes',
  templateUrl: './typage-attributes.component.html',
  styleUrls: ['./typage-attributes.component.css']
})
export class TypageAttributesComponent implements OnInit {

  attributes: any[];

  constructor(private typageService: TypageAttributesService) { 
    
  }

  ngOnInit() {
    this.typageService.getAll().subscribe(data => {
      this.attributes = data;
    });
  }

  save() {
    console.log(this.attributes);
    // this.typageService.save(this.attributes).subscribe();
  }
}
