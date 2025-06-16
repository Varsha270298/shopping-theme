import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: any =[];
  productfurniture :any =[];
  responsiveOptions;

  constructor() {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  ngOnInit() {
    this.products = [{
      category: "Accessories",
      code: "f230fh0g3",
      description: "Product Description",
      id: "1000",
      image: '/assets/img/decor.jpg',
      inventoryStatus: "INSTOCK",
      name: "Decorative candle",
      price: 65,
      quantity: 24,
      rating: 5
    },
    {
      category: "Accessories",
      code: "f230fh0g3",
      description: "Product Description",
      id: "1000",
      image: '/assets/img/cushion.avif',
      inventoryStatus: "INSTOCK",
      name: "Cushion",
      price: 65,
      quantity: 24,
      rating: 5
    },
    {
      category: "Accessories",
      code: "f230fh0g3",
      description: "Product Description",
      id: "1000",
      image: "/assets/img/plants&flowers.avif",
      inventoryStatus: "INSTOCK",
      name: "Plants & Flowers",
      price: 65,
      quantity: 24,
      rating: 5
    },{
      category: "Accessories",
      code: "f230fh0g3",
      description: "Product Description",
      id: "1000",
      image: "/assets/img/BedSheets.avif",
      inventoryStatus: "INSTOCK",
      name: "BedSheets",
      price: 65,
      quantity: 24,
      rating: 5
    },
    {
      category: "Accessories",
      code: "f230fh0g3",
      description: "Product Description",
      id: "1000",
      image: "/assets/img/serve-ware.avif",
      inventoryStatus: "INSTOCK",
      name: "Serve ware",
      price: 65,
      quantity: 24,
      rating: 5
    },
    {
      category: "Accessories",
      code: "f230fh0g3",
      description: "Product Description",
      id: "1000",
      image: "/assets/img/candle.avif",
      inventoryStatus: "INSTOCK",
      name: "Candle",
      price: 65,
      quantity: 24,
      rating: 5
    }]
    // this.productService.getProductsSmall().then(products => {
    // 	this.products = products;
    // });
    this.productfurniture = [{
      category: "Accessories",
      code: "f230fh0g3",
      description: "Product Description",
      id: "1000",
      image: '/assets/img/sofa1.avif',
      inventoryStatus: "INSTOCK",
      name: "Sofas in Furniture",
      price: 65,
      quantity: 24,
      rating: 5
    },
    {
      category: "Furnitures",
      code: "f230fh0g3",
      description: "Product Description",
      id: "1000",
      image: '/assets/img/storage.avif',
      inventoryStatus: "INSTOCK",
      name: "Storage",
      price: 65,
      quantity: 24,
      rating: 5
    },
    {
      category: "Accessories",
      code: "f230fh0g3",
      description: "Product Description",
      id: "1000",
      image: "/assets/img/table and desks.avif",
      inventoryStatus: "INSTOCK",
      name: "Table & Desks",
      price: 65,
      quantity: 24,
      rating: 5
    },{
      category: "Accessories",
      code: "f230fh0g3",
      description: "Product Description",
      id: "1000",
      image: "/assets/img/curtains.avif",
      inventoryStatus: "INSTOCK",
      name: "Curtains",
      price: 65,
      quantity: 24,
      rating: 5
    },
    {
      category: "Accessories",
      code: "f230fh0g3",
      description: "Product Description",
      id: "1000",
      image: "/assets/img/chair.png",
      inventoryStatus: "INSTOCK",
      name: "Chair",
      price: 65,
      quantity: 24,
      rating: 5
    },
    {
      category: "Accessories",
      code: "f230fh0g3",
      description: "Product Description",
      id: "1000",
      image: "/assets/img/beds.avif",
      inventoryStatus: "INSTOCK",
      name: "Beds",
      price: 65,
      quantity: 24,
      rating: 5
    }]
  }

}
