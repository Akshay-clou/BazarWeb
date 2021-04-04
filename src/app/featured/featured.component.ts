import { Component, OnInit } from '@angular/core';
import { ProductsService } from "../service/products.service";

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})
export class FeaturedComponent implements OnInit {
  featuredList:any[]=[]
  constructor(private featuredData:ProductsService) { }
  ngOnInit(): void {
   this.featuredList= this.featuredData.getFeaturedList();
  }

}
