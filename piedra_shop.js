
function caliculate() {
    var tax= 1.08;

    var cheeseCake = 2800;
    var number=document.getElementById('number');//要素の特定
    var count1 =number.value;                    //選択された値を取得
    var productSum1= count1 * cheeseCake;        //チーズケーキの合計


    var pasta = 1500;
    var number=document.getElementById('number2');
    var count2 =number.value;                     
    var productSum2= count2 * pasta;             //パスタの合計

    

    var bread = 400;
    var number=document.getElementById('number3');
    var count3 =number.value;                     
    var productSum3= count3 * bread;             //パンの合計
        
    

   
    var pizza = 2000;
    var number=document.getElementById('number4');
    var count4 =number.value;                     
    var productSum4= count4 * pizza;             //ピザの合計


    document.getElementById('productSum').innerHTML ='商品' +(productSum1+productSum2+productSum3+productSum4)　+  '円';//チーズケーキの値段と個数をかけた合計

    var total= (productSum1+productSum2+productSum3+productSum4) * tax;
    document.getElementById('totalSum').innerHTML= '合計金額' +Math.floor(total)　+  '円';
    var productSum =(productSum1+productSum2+productSum3+productSum4);

    var taxSum =total - productSum;   
    document.getElementById('taxSum').innerHTML= '消費税'+ Math.floor(taxSum) + '円';
}
caliculate();








