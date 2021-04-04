import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../service/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
   productList:any[]=[];
  constructor(private productData:ProductsService) { }

  ngOnInit(): void {
   this.productList= this.productData.getProductsList();

  }

}
