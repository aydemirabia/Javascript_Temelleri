/*
    i) İki öğrencinin aşağıdaki bilgilerini değişkenler içerisinde saklayınız.

    öğrenci 1:
        isim:           Yiğit Özdemir
        doğum tarihi:   2000
        notlar:         29, 88, 34

        isim:           Rana Aydemir
        doğum tarihi:   2002
        notlar:         91, 11, 43

    ii) Öğrencilerinin yaş bilgilerini değişkende tutunuz.
    iii) Öğrencilerinin ders ortalama notunu değişkende saklayınız.
    iv) Öğrencilerinin 50 geçme notuna göre başarı durumlarını değişkende saklayınız.

*/

let ogr1isim = "Yiğit";
let ogr1soyisim = "Özdemir";
let ogr1dogumTarihi = "1995";
let ogr1not1 = 29;
let ogr1not2 = 88;
let ogr1not3 = 34;

let ogr2isim = "Rana";
let ogr2soyisim = "Aydemir";
let ogr2dogumTarihi = "1975";
let ogr2not1 = 91;
let ogr2not2 = 11;
let ogr2not3 = 43;


 /*fonksiyon */
 let suankiYil = new Date().getFullYear();

let ogr1yas = suankiYil - ogr1dogumTarihi;
console.log(ogr1yas);

let ogr1Yas = 2022 - ogr1dogumTarihi;
console.log(ogr1Yas);

let ogr1Ort = (ogr1not1 + ogr1not2 + ogr1not3) / 3;
console.log(ogr1Ort);

/*ortalamanın tam sayı şeklindeki sonucu elde etmek için: */
console.log(parseInt(ogr1Ort));

/* Sonuç eğer doğruysa True / 1 döndürür. */
console.log(ogr1Ort >= 50)

let ogr2yas = suankiYil - ogr2dogumTarihi;
console.log(ogr2yas);

let ogr2Yas = 2022 - ogr2dogumTarihi;
console.log(ogr2Yas);

let ogr2Ort = (ogr2not1 + ogr2not2 + ogr2not3) / 3;
console.log(ogr2Ort);

/*ortalamanın tam sayı şeklindeki sonucu elde etmek için: */
console.log(parseInt(ogr2Ort));

/* Sonuç eğer doğruysa True / 1 döndürür. */
console.log(ogr2Ort >= 50)
