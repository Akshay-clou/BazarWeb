import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../service/products.service'
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
   bannerList:any[]=[]
  constructor( private bannerData:ProductsService) { }

  ngOnInit(): void {
    this.bannerList=this.bannerData.getBannerList();

  }



}
