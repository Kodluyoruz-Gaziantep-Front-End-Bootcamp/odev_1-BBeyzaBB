let arr1 = ['2', 'a', '3', 3, 4, 3, 5, 5]
let arr2 = ['c', 'c', 'h', 1, 1, 1, 4]
let arr3 = [
    { name: 'ali', id: 221 },
    { name: 'veli', id: 343 },
    { name: 'konya', id: 333 },
    { name: 'ali', id: 664 },
    { name: 'selim', id: 112 }
]
let arr4 = [1, 1, 1, 4, 5, 5, 3, 2]
/* 
1- arr1 başına 'a' elemanını ekleyiniz
2- arr1 sonuna 6 elemanını ekleyiniz
3- arr1 sonundaki elemanı siliniz
4- arr1 başındaki elemanı siliniz
5- arr1 ile arr2 arraylerini iki farklı yöntemle birleştiriniz
6- kendisine gönderilen arrayde verilen elemanın olup olmadığını bulan array ve 
    aranan eleman olmak üzere iki parametre alan ve geriye boolean değer döndüren bir fonksiyon yazınız
    ve bu fonkisiyona arr2 ve 'h' parametresini verip çağırınız
7- arr2 içindeki 'h' elemanın indexsini bulunuz
8- arr2 nin eleman sayısını 3 adete 2 faklı yöntemle düşrünüz
9- kendisine verilecek array elemanlarını döngü ile dönüp, array içindeki number
    değerlerinin toplamını geriye dönen bir fonkiyon yazınız ve arr1 değeri ile çağırınız   
10- arr1 elemanlarını string değere çeviren bir map fonksiyonu yazınız    
11- arr3 içindeki id değeri 221 olan elemanı bulunuz
12- arr3 içindeki user değerleri ali olan elemanları bulunuz
13- arr3 içindeki elemanlarının id değerlerinin toplamlarını bulan bir reduce fonsiyonu yazınız

her sorunun cevabını console.log ile yazıdırın
*/

//1- arr1 başına 'a' elemanını ekleyiniz
arr1.unshift('a')
console.log(arr1)

//2- arr1 sonuna 6 elemanını ekleyiniz
arr1.push(6)
console.log(arr1)

//3- arr1 sonundaki elemanı siliniz
arr1.pop()
console.log(arr1)

//4- arr1 başındaki elemanı siliniz
arr1.shift()
console.log(arr1)

//5- arr1 ile arr2 arraylerini iki farklı yöntemle birleştiriniz
let c= [...arr1, ...arr2]
console.log(c)

let b = arr1.concat(arr2)
console.log(b)

/*6- kendisine gönderilen arrayde verilen elemanın olup olmadığını bulan array ve 
aranan eleman olmak üzere iki parametre alan ve geriye boolean değer döndüren bir fonksiyon yazınız
ve bu fonksiyona arr2 ve 'h' parametresini verip çağırınız*/
function myFunction(arr, arananDeger){
    return arr.find(el =>el===arananDeger) == undefined}

console.log(myFunction(arr2, 'h'))
/*let e = arr2.every((el, i) => el==='h')
console.log(e)*/

//7- arr2 içindeki 'h' elemanın indexsini bulunuz
let newIndex = arr2.indexOf('h')
console.log(newIndex)

//8- arr2 nin eleman sayısını 3 adete 2 faklı yöntemle düşürünüz
console.log(arr2.slice(4))
console.log(arr2.slice(1,4))

/*9- kendisine verilecek array elemanlarını döngü ile dönüp, array içindeki number
    değerlerinin toplamını geriye dönen bir fonkiyon yazınız ve arr1 değeri ile çağırınız */ 
    let sum = 0;
    for (let i= 0; i<arr1.length; i++) {
        if (!isNaN(arr1[i])) {
    sum+=arr1[i]
    }
       
    }  
    console.log(sum)
//10- arr1 elemanlarını string değere çeviren bir map fonksiyonu yazınız   
let arr1Str = arr1.map(str => {
    return String(str);
});
console.log(arr1Str)


//11- arr3 içindeki id değeri 221 olan elemanı bulunuz
let newarr3 = arr3.find(obj=>obj.id===221)
console.log(newarr3)

//12- arr3 içindeki user değerleri ali olan elemanları bulunuz
let newarr3ali = arr3.filter(obj=>obj.name==='ali')
console.log(newarr3ali)

//13- arr3 içindeki elemanlarının id değerlerinin toplamlarını bulan bir reduce fonsiyonu yazınız
let sumId= arr3.reduce(function(accumulator,currentValue) {
    return accumulator + currentValue.id;
},0);
console.log(sumId)
