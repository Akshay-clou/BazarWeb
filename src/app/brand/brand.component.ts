import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
brandList=[
[
  "../../assets/images/brand-6.png",
  "../../assets/images/brand-4.png",
  "../../assets/images/brand-3.png",
  "../../assets/images/brand-2.png",
  "../../assets/images/brand-1.png",
  "../../assets/images/brand-6.png"
],
[
  "../../assets/images/brand-4.png",
  "../../assets/images/brand-1.png",
  "../../assets/images/brand-2.png",
  "../../assets/images/brand-3.png",
  "../../assets/images/brand-4.png",
  "../../assets/images/brand-6.png"
]

]
  constructor() { }

  ngOnInit(): void {
  }

}
