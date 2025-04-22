const products = [
    {
        id:'01',
        name: 'diseno1',
        price: 0,
        description: 'luna',
        stock: '1',
        category:'Disenos',
        img: '../diseno1.jpg',
    },
    {
        id:'02',
        name: 'diseno2',
        price: 0,
        description:'corazon',
        stock: 1,
        category:'Disenos',
        img:'../diseno2.jpg'
    },
    {
        id:'03',
        name:'diseno3',
        price: 0,
        description:'equilibrio',
        stock: 1,
        category:'Disenos',
        img:'../diseno3.jpg',
    },
    {
        id:'04',
        name:'jabon',
        price: 12000,
        description:'jabon',
        stock: 10,
        category:'Cuidados',
        img:'../jabon.jpg',
    },
    {
        id:'05',
        name:'crema',
        price:15000,
        description:'cremaposttattoo',
        stock: 12,
        category:'Cuidados',
        img:'../crema.jpg',
    },
    {
        id:'06',
        name:'crema-cbd',
        price:17000,
        description:'crema con cbd',
        stock: 15,
        category:'Cuidados',
        img:'../crema-cbd.jpg',
    },
    {
        id:'07',
        name:'remera1',
        price:7000,
        description:'remeraflor',
        stock: 3,
        category:'Ropita',
        img:'../remera1.jpg',
    },
    {
        id:'08',
        name:'remera2',
        price:6500,
        description:'remeradiseño',
        stock:'5',
        category:'Ropita',
        img:'../remera2.jpg',
    },
   
]

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        let error = false
        setTimeout (()=>{
            if(error){
                reject('No hay datos')
            }else{
                resolve(products)
            }
        }, 2000)
        
    })
}

export const getOneProducts = (id) => {
    return new Promise((resolve) => {
        let productFound = products.find((prod) => prod.id === id)
        setTimeout (() =>{
            resolve(productFound)
        }, 1500)  
    })
}