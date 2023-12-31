import { Cateogry, Food } from "./types";

export const cateogories  : Cateogry[] = [

{
    name : 'BreakFast',
    logo : '/breakfast.png',
    color : '#EAF9E6'
},

{
    name : 'Dinner',
    logo : '/dinner.png',
    color : '#FFE8EE'
},

{
    name : 'Salad',
    logo : '/salad.png',
    color : '#FFEEE8'
},

{
    name : 'Bread',
    logo : '/bread.png',
    color : '#EAF9E6'
},

{
    name : 'Burger',
    logo : '/burger.png',
    color : '#FFE8EE'
},

{
    name : 'Pizza',
    logo : '/pizza.png',
    color : '#FFEEE8'
},


]
export const foodItems : Food[] =  [
    {  "id" : "1",
      "title": "Steak",
      "url": "https://firebasestorage.googleapis.com/v0/b/food-app-37de9.appspot.com/o/food%2Fsteak.jpg?alt=media&token=cb35aab8-ab73-4cdd-a16a-892a18d5fc6c",
      "price": 49.63,
      "description": "A succulent and tender grilled steak, perfect for a hearty meal.",
      "isFavourite" : false
    },
    {  "id" : "2",
      "title": "Soup",
      "url": "https://firebasestorage.googleapis.com/v0/b/food-app-37de9.appspot.com/o/food%2Fsoup.jpg?alt=media&token=f4569c20-2fd7-4d0b-99e0-b8766e71c796",
      "price": 35.22,
      "description": "A warming and nutritious soup, ideal for any season.",
      "isFavourite" : false

    },
    {  "id" : "3",
      "title": "Shora",
      "url": "https://firebasestorage.googleapis.com/v0/b/food-app-37de9.appspot.com/o/food%2Fshora.jpg?alt=media&token=1b8f7c20-4a26-4531-9b0b-bf497744647d",
      "price": 9.16,
      "description": "A traditional dish, full of unique flavors and spices.",
      "isFavourite": false
    },
    {  "id" : "4",
      "title": "Frips",
      "url": "https://firebasestorage.googleapis.com/v0/b/food-app-37de9.appspot.com/o/food%2Ffrips.jpg?alt=media&token=89f310b1-9503-4f45-97de-c728ebc13bd8",
      "price": 22.86,
      "description": "Crispy and delicious, a perfect snack or side dish."
      ,
      "isFavourite" : true 
    },
    {  "id" : "5",
      "title": "Fries",
      "url": "https://firebasestorage.googleapis.com/v0/b/food-app-37de9.appspot.com/o/food%2Ffries.jpg?alt=media&token=3f83f2b1-80be-4cc5-b62e-64a52f718128",
      "price": 22.02,
      "description": "Golden and crispy fries, a classic favorite for all.",
      "isFavourite": false
    },
    {  "id" : "6",
      "title": "Chocolate Cake",
      "url": "https://firebasestorage.googleapis.com/v0/b/food-app-37de9.appspot.com/o/food%2Fchocolate%20cake.jpg?alt=media&token=86f279ee-c82b-4c44-929b-e607839893e3",
      "price": 20.29,
      "description": "A rich and moist chocolate cake, for those sweet cravings."
      ,
      "isFavourite" : true 
    },
    {  "id" : "7",
      "title": "Burger",
      "url": "https://firebasestorage.googleapis.com/v0/b/food-app-37de9.appspot.com/o/food%2Fburger.jpg?alt=media&token=12b89a77-561c-47c2-909f-f39324e9f525",
      "price": 14.6,
      "description": "A juicy and flavorful burger, a satisfying fast-food delight.",
      "isFavourite": false
    },
    {  "id" : "8",
      "title": "Bread",
      "url": "https://firebasestorage.googleapis.com/v0/b/food-app-37de9.appspot.com/o/food%2Fbread.jpg?alt=media&token=deb40d19-fc25-4bb7-a390-489eb386ca9d",
      "price": 14.9,
      "description": "Freshly baked bread, soft and perfect for any meal."
      ,
      "isFavourite" : true 
    }
  ]
