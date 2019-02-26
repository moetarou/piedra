

var cheeseCake = new Product('cheeseCake',2800);
    cheeseCake.info();

var pasta = new Product('pasta',1500);
    pasta.info();

var bread = new Product('bread',400);
    bread.info();

var pizza = new Product('pizza',2000);
    pizza.info();


// console.log(cheeseCake.info());
// result= cheeseCake.totalPrice(4);
// console.log('合計は' + result);
    


// // pasta
// var pasta= new Product('pasta',1500);

//     console.log(`名前は${pasta.name}`);

// // bread
// var bread= new Product('bread',400);

//     console.log(`名前は${bread.name}`);

// // pizza
// var pizza= new Product('pizza',2000);

//     console.log(`名前は${pizza.name}`);




// class Sample() {
//     var tax=1.08;
//     var product= cake1,cake2,cake3,cake4;
//     var number= document.getElementById('number');
//     var count1=number.value;
//     var productSum= count1 * product;
// }

// 必要なもの、
// 物の値段、個数と税をかける
// それぞれの合計を足して、
// そう合計を求める

// 合計の配列を作って、それを足す
// var total= []


// function caliculate(price) {

//     var tax= 1.08;
//     var number=document.getElementById('number')//要素の特定   
//     var count=number.value;           
//     return count * price *tax;        //チーズケーキの合計
    
// }

// var total = caliculate(2800);


// var kosuu=[number.value, number2.value, number3.value, number4.value,]
// function caliculate(price,) {

//     var tax= 1.08;
//     var number=document.getElementById('number')//要素の特定   
//     var count=number.value;           
//     return count * price *tax;        //チーズケーキの合計
    
// }

// var total = caliculate(2800,kosuu[0]);



//     // pasta
//     var number2=document.getElementById('number2.value');             
//     var productSum2= number2 * product[1];             //パスタの合計

    
//     // bread
//     var number3=document.getElementById('number3.value');         
//     var productSum3= number3 * product[2];             //パンの合計
        

//     // pizza
//     var number4=document.getElementById('number4.value');             
//     var productSum4= number4 * product[3];             //ピザの合計


//     document.getElementById('productSum').innerHTML ='商品' +(productSum1+productSum2+productSum3+productSum4)　+  '円';//チーズケーキの値段と個数をかけた合計

//     var total= product * tax;
//     document.getElementById('totalSum').innerHTML= '合計金額' +Math.floor(total)　+  '円';
//     var productSum =(productSum1+productSum2+productSum3+productSum4);

//     var taxSum =total - productSum;   
//     document.getElementById('taxSum').innerHTML= '消費税'+ Math.floor(taxSum) + '円';
// }
// caliculate();
// console.log(productSum);
