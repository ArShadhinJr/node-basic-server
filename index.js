const express = require( 'express' ); 
const app = express(); 
const cors = require( 'cors' ); 
app.use( cors() );

const talk = {
    Salam: 'Assalamu Alaikum. This is from Server.'
}

const vegetables = [
  
  {
		"name":"Cabbage",
		"photo_url":"https://www.freepngimg.com/thumb/categories/2970.png",
		"quantity":"One Unit",
		"id":1,
		"price": 30
	},
	{
		"name":"Capsicum",
		"photo_url":"https://www.nicepng.com/png/detail/52-525615_green-bell-pepper-png-green-capsicum-png.png",
		"quantity":"One Unit",
		"id":2,
		"price": 5
	},
	{
		"name":"Garlic",
		"photo_url":"https://www.freepngimg.com/thumb/garlic/2-2-garlic-transparent-thumb.png",
		"quantity":"One Unit",
		"id":3,
		"price": 20
	},
	{
		"name":"Beetroot",
		"photo_url":"https://pngimg.com/uploads/beet/beet_PNG28.png",
		"quantity":"One Unit",
		"id":4,
		"price": 20
	},
	{
		"name":"Tomatoes",
		"photo_url":"https://www.freepngimg.com/thumb/categories/2985.png",
		"quantity":"One Unit",
		"id":5,
		"price": 5
	},
	{
		"name":"Celeriac",
		"photo_url":"https://w7.pngwing.com/pngs/252/146/png-transparent-celeriac-leaf-vegetable-food-celery-herbes-leaf-vegetable-food-plant-stem-thumbnail.png",
		"quantity":"One Bunch",
		"id":6,
		"price": 5
	},
	{
		"name":"Carrots",
		"photo_url":"https://www.freepngimg.com/thumb/categories/2971.png",
		"quantity":"One Kg",
		"id":7,
		"price": 60
	},
	{
		"name":"Onions",
		"photo_url":"https://www.freepngimg.com/thumb/onion/10-red-onion-png-image-thumb.png",
		"quantity":"One Kg",
		"id":8,
		"price": 120
	},
	{
		"name":"Potatoes",
		"photo_url":"https://www.freepngimg.com/thumb/potato/7-potato-png-images-pictures-download-thumb.png",
		"quantity":"One container",
		"id":9,
		"price": 80
	}, 
    {
        "name": "Spinach",
        "photo_url": "https://www.freepngimg.com/thumb/categories/2972.png",
        "quantity": "One Unit",
        "id": 10,
        "price": 30
    }, 
    {
        "name": "Broccoli",
        "photo_url": "https://www.freepngimg.com/thumb/categories/2973.png",
        "quantity": "One Unit",
        "id": 11,
        "price": 30
    }, 
    {
        "name": "Cauliflower",
        "photo_url": "https://www.freepngimg.com/thumb/categories/2974.png",
        "quantity": "One Unit",
        "id": 12,
        "price": 30
    }, 
    {
        "name": "Brinjal", 
        "photo_url": "https://www.freepngimg.com/thumb/categories/2975.png",
        "quantity": "One Unit",
        "id": 13,
        "price": 50
    },
    {
        "name": "Ladies Finger",
        "photo_url": "https://www.freepngimg.com/thumb/categories/2977.png",
        "quantity": "One Unit",
        "id": 14,
        "price": 50
    }, 
    {
        "name": "Mushroom",
        "photo_url": "https://www.freepngimg.com/thumb/categories/2978.png",
        "quantity": "One Unit",
        "id": 15,
        "price": 50
    }, 
    {
        "name": "Red Chilli",
        "photo_url": "https://www.freepngimg.com/thumb/categories/2981.png",
        "quantity": "One Unit",
        "id": 16,
        "price": 60
    }, 
    {
        "name": "Pumpkin",
        "photo_url": "https://www.freepngimg.com/thumb/categories/2983.png",
        "quantity": "One Unit",
        "id": 17,
        "price": 30
    }, 
    {
        "name": "Broccoli", 
        "photo_url": "https://freepngimg.com/thumb/broccoli/8-2-broccoli-png-clipart.png",
        "quantity": "One Unit",
        "id": 18,
        "price": 30
    }
]

app.get( '/vegetables' , ( req, res ) => {
    res.send( vegetables );
})

app.get( '/vegetables/:id', ( req, res ) => {
    res.send(vegetables[req.params.id - 1]);
})


app.get( '/', ( req, res ) => {
    res.send(talk)
})


app.listen( 3000 ); 