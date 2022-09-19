let ogrenciler = ["Yiğit", "Rana", "Hazal"];

let sonuc = ogrenciler.length;
console.log(sonuc);

//toString()
sonuc = ogrenciler.toString();
console.log(sonuc);

//join()
sonuc = ogrenciler.join("-");
console.log(sonuc);

//pop(): son eleman silinir ve silinen eleman döndürülür.
sonuc = ogrenciler.pop();
console.log(sonuc);
console.log(ogrenciler);

//shift(): ilk eleman silinir ve silinen eleman döndürülür.
sonuc = ogrenciler.shift();
console.log(sonuc);
console.log(ogrenciler);

//push(): dizinin sonuna eleman eklenir.
sonuc = ogrenciler.push("Emre", "Emir", "Alara");
console.log(sonuc);
console.log(ogrenciler);

//unshift(): dizinin ilk elemanına eleman ekler.
sonuc = ogrenciler.unshift("Ömer");
console.log(sonuc);
console.log(ogrenciler);

//concat(): dizi birleştirme 
let yeniDizi = ["Asaf", "Melis", "Muhammet"];
sonuc = ogrenciler.concat(yeniDizi);
console.log(sonuc);

//splice(): kimi zaman eleman siler kimi zaman da eleman ekler. kullanışlı bir metottur.
//eleman ekleme
//sonuc = yeniDizi.splice(0, 0, ogrenciler)

//eleman silme
sonuc=yeniDizi.splice(0,1,"Ayşe","Ahmet") //silinen elemanı döndürür, ekler
console.log(sonuc);
console.log(yeniDizi); 

sonuc=yeniDizi.splice(0,2);
console.log(sonuc);
console.log(yeniDizi);

