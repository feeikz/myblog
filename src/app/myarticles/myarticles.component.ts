import { Component, OnInit } from '@angular/core';
import { Content } from '../content';
import { SharedService } from '../shared.service';
import { Title } from '@angular/platform-browser';
 
@Component({
  selector: 'app-myarticles',
  templateUrl: './myarticles.component.html',
  styleUrls: ['./myarticles.component.css']
})
export class MyarticlesComponent implements OnInit {

  constructor(    private titleService: Title,
    private sharedService: SharedService) { }
  
  inputs: Content [] = [];

  ngOnInit(): void {
    this.titleService.setTitle(` ${this.sharedService.blogTitle}`);  
    this.inputs = [];
  }

  onClickMe (){
    //this.inputs.push();
    console.log("KLIK");
  }

}
