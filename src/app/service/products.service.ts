import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  bannerData: any[] = [
    { product_id: 1, image: '../../assets/images/banner1.png' },
    {
      product_id: 2,
      image: '../../assets/images/banner2.png',
    },
    {
      product_id: 3,

      image: '../../assets/images/banner3.png',
    },
  ];

  featuredData: any[] = [
    [
      {
        categoryId: 1,
        name: 'Accessories',
        image: '../../assets/images/Image2 .png',
        total_items: 25,
      },
      {
        categoryId: 2,
        name: 'Bags',
        image: '../../assets/images/bags.png',
        total_items: 25,
      },
      {
        categoryId: 3,
        name: 'Man',
        image: '../../assets/images/Men.png',
        total_items: 25,
      },
      {
        categoryId: 4,
        name: 'Women',
        image: '../../assets/images/women.png',
        total_items: 25,
      },
      {
        categoryId: 5,
        name: 'Watch',
        image: '../../assets/images/Image5.png',
        total_items: 25,
      },
    ],
    [
      {
        categoryId: 6,
        name: 'Accessories',
        image: '../../assets/images/Image2 .png',
        total_items: 25,
      },
      {
        categoryId: 10,
        name: 'Bags',
        image: '../../assets/images/bags.png',
        total_items: 25,
      },
      {
        categoryId: 7,
        name: 'Man',
        image: '../../assets/images/Men.png',
        total_items: 25,
      },
      {
        categoryId: 8,
        name: 'Women',
        image: '../../assets/images/women.png',
        total_items: 25,
      },
      {
        categoryId: 9,
        name: 'Watch',
        image: '../../assets/images/Image5.png',
        total_items: 25,
      },
    ],
  ];

  productsList: any[] = [
    [
      {
        productId: 1,
        name: 'Smart Watches',
        image: '../../assets/images/qwsd.png',
        price: 25,
      },
      {
        productId: 2,
        name: 'Smart Watches',
        image: '../../assets/images/qwsd.png',
        price: 25,
      },
      {
        productId: 3,
        name: 'Smart Watches',
        image: '../../assets/images/Image3.png',
        price: 25,
      },
      {
        productId: 4,
        name: 'Smart Watches',
        image: '../../assets/images/Image4.png',
        price: 25,
      },
    ],
    [
      {
        productId: 5,
        name: 'Smart Watches',
        image: '../../assets/images/Image4.png',
        price: 25,
      },
      {
        productId: 6,
        name: 'Smart Watches',
        image: '../../assets/images/qwsd.png',
        price: 25,
      },
      {
        productId: 7,
        name: 'Smart Watches',
        image: '../../assets/images/Image2 .png',
        price: 25,
      },
      {
        productId: 8,
        name: 'Smart Watches',
        image: '../../assets/images/Image1 .png',
        price: 25,
      },
    ],
  ];

  constructor() {}
  getBannerList() {
    return this.bannerData;
  }
  getFeaturedList() {
    return this.featuredData;
  }
  getProductsList() {
    return this.productsList;
  }
}
