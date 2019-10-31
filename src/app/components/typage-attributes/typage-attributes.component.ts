import { Component, OnInit } from '@angular/core';

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

  addSynonyme(index: number) {
    // If synonymes is null 
    // create an empty array

    if(!this.attributes[index].synonymes) {
      this.attributes[index].synonymes = [];
      this.attributes[index].synonymes.push("");
    } else {
      let length = this.attributes[index].synonymes.length;
      if(this.attributes[index].synonymes[length-1] || length == 0) {
        
        this.attributes[index].synonymes.push("");
      }
    }
  }

  editSynonyme(myInput) {
    myInput.disabled = false;
    myInput.focus();
  }

  deleteSynonyme(indexAttribute: number, indexSynonyme: number) {
    this.attributes[indexAttribute].synonymes.splice(indexSynonyme, 1);
  }

  saveSynonyme(myInput, indexAttribute, indexSynonyme) {
    let synonyme = myInput.value;
    if(synonyme && synonyme.trim()) {
      this.attributes[indexAttribute].synonymes[indexSynonyme] = synonyme;
      myInput.disabled=true;
    } else {
      myInput.focus();
    }
  }

  saveAll() {
    this.typageService.saveAll(this.attributes).subscribe();
  }
}
