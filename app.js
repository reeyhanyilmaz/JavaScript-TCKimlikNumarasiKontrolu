
//değiskenleri tanımladık
let ID, Btn, resultFalse, resultTrue, odd=0, even=0, result, i, z, tcTotal=0;
ID = document.querySelector("#tc");
resultFalse=document.querySelector("#resultFalse");
resultTrue=document.querySelector("#resultTrue");
Btn=document.querySelector("#Btn");


Btn.addEventListener("click", function(){

    for (i=0;i<9;i+=2) { //1 3 5 7 9. sayıları aldık. İndex 0'dan basladığı için.
        odd+= Number(ID.value[i]);
    }

    odd*=7; //odd=odd*7; demek. 7 katını aldık burada

    for(j=1;j<8;j+=2){ //2 4 6 8. sayıları aldık. İndex 0'dan basladığı için.
        even+= Number(ID.value[j]);
    }
    result=Math.abs(odd-even); //Math nesnesini abs (mutlak deger al.) sonuc negatif cıkmasın diye.
    
    for(z=0; z<10; z++){ // 0 dan 9 a kadar 10 haneyi toplayacak.
        tcTotal+= Number(ID.value[z]);
    }

    resultFalse.style.display="block"; //HTML'de display: none dedik onu görünür yaptık
    resultTrue.style.display="none"; // true kapansın dedik.
    if (ID.value == "") {
        resultFalse.textContent="Kimlik numarasını boş bırakamazsınız!";
    } else if(ID.value.length !== 11){        
        resultFalse.textContent="Kimlik numarası 11 haneli olmak zorundadır!";
    }else if(isNaN(ID.value)){ //2.kosul- girilen deger sayı mı diye kontrol etmek için
        resultFalse.textContent="Kimlik numarası sayılardan oluşmak zorundadır!";
    }else if(ID.value[0]==0){
        resultFalse.textContent="Kimlik numarasının ilk rakamı sıfır olamaz!";
    } else if ( result%10!= Number (ID.value[9] )) { // result sonucun 10'a bölümünden kalan 10. haneye eşit degilse (index 9 olur)
        resultFalse.textContent="Böyle bir TC kimlik numarası mevcut değil! ";
    } else if (tcTotal%10 != Number (ID.value[10])) {
        resultFalse.textContent="Böyle bir TC kimlik numarası mevcut değil! ";
    } else {
        resultFalse.style.display="none";
        resultTrue.style.display="block";
        resultTrue.textContent="Girilen kimlik numarası sorunsuzdur";
    }
});


        