const fatura = (urunler , vergi) => {
    let toplam = 0;
    for(let i = 0; i < urunler.length; i++){
        toplam += urunler[i] * urunler[i] * vergi;
    }
    return toplam;
}

console.log(fatura([10 , 20 , 30] , 0.25));

let urunler = [
    {name : 'Guitar' , price : 10},
    {name : 'Saxophone' , price : 20},
    {name : 'Drums' , price : 30},
    {name : 'Violin' , price : 40}
];
const toplamUrun = (urunler) => {
    let toplam = 0;
    for(let i = 0; i < urunler.length; i++){
        console.log(`${urunler[i].name} Ürününün Fiyatı : ${urunler[i].price}`)
        toplam += urunler[i].price;
    }
    console.log(`Toplam Ürün Fiyatı : ${toplam}`);
};

toplamUrun(urunler);