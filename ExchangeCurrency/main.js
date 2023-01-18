//1.박스2개 만들기 
//2. 드랍다운 리스트 만들기 
//3.환율정보 들고오기 


//4. 드랍다운 리스트에서 아이템 선택하면 아이템이 바뀜
//5. 금액을 입력하면해당 환액으로 환전이 된다. 
//6. 숫자를 한국어로 읽는법
//7. 반대로 밑에 박스에서 숫자를 바꿔도 위에 박스에 환율이 적용이 된다. 






// 값이 여러가지 정보가 들어가야 할 때 객체라는 데이터타입을 쓴다.
let currencyRatio={
    USD:{
        KRW:1241.00,
        USD:1,
        VND:23450.00,
        unit:"달러",
        img: "https://cdn-icons-png.flaticon.com/512/555/555526.png",
        
    },
    KRW:{
        KRW:1,
        USD:0.00081,
        VND:18.92,
        unit:"원",
        img: "https://cdn.countryflags.com/thumbs/south-korea/flag-400.png",
    },
    VND:{
        VND:1,
        KRW:0.053,
        USD:0.000043,
        unit:"동",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/2560px-Flag_of_Vietnam.svg.png",
    }
}




let toCurrency="USD"
let selectCurrency="USD"
document.getElementById("from-button").innerHTML=innerHTML=`<img class="flag-img" src=${currencyRatio[selectCurrency].img}>${selectCurrency}`
document.getElementById("to-button").innerHTML=innerHTML=`<img class="flag-img" src=${currencyRatio[selectCurrency].img}>${selectCurrency}`


//객체를 읽어오는법
//1.
//console.log(currencyRatio.KRW.unit)

//2.
//console.log(currencyRatio['KRW']['unit'])
//from-currency-list 안의 a태그들에게 이벤트를 줄거다
//document 라는 객체는 우리가 html 파일에 태그들을 들고올 수 있는 유용한 기능들을 제공해줌


document.querySelectorAll("#from-currnecy-list a").forEach((menu)=>menu.addEventListener("click",function(){
    //1.버튼을 가져온다
    
    //2.버튼에 값을 바꾼다. textcontent 선택한 버튼의 텍스트를 들고오는것 내가 선택한 텍스트를 들고와서 이 버튼 텍스트에 넣어준다.
    
    document.getElementById("from-button").textContent=this.textContent
    console.log(document.getElementById("from-button").textContent)
   
    //3.선택된 currency 값을 변수에 저장해준다. 
    //초기값
    selectCurrency=this.textContent;
    
    document.getElementById("from-button").innerHTML=`<img class="flag-img" src=${currencyRatio[selectCurrency].img}>${selectCurrency}`
    console.log("현재 선택 통화는"+selectCurrency);
    convert();

}));





    document.querySelectorAll("#to-currecny-list a").forEach((menu)=>menu.addEventListener("click",function(){
    //1.버튼을 가져온다
    
    //2.버튼에 값을 바꾼다. textcontent 선택한 버튼의 텍스트를 들고오는것 내가 선택한 텍스트를 들고와서 이 버튼 텍스트에 넣어준다.
    
    document.getElementById("to-button").textContent=this.textContent

    //3.선택된 currency 값을 변수에 저장해준다. 
    //초기값
    toCurrency=this.textContent;
    
    document.getElementById("to-button").innerHTML=`<img class="flag-img" src=${currencyRatio[toCurrency].img}>${toCurrency}`
    console.log("현재 선택 통화는"+toCurrency);
    convert();
                        }));


//1.키를 입력하는 순간
//2.환전되서
//3.환전된값이 보인다

function convert(){
    
   
    //1. 환전하려면 => 얼마를 환전? 가지고 있는 돈이 뭔지, 바꾸고자 하는 돈이 무엇인지.
    // 돈*환율=환전금액


    // 내가 인풋창에 있는것을 가져오고 싶을때는 .value를 써주어야함
    let amount=document.getElementById("from-input").value
    console.log("바꿀돈은"+amount+"입니다")
    console.log(selectCurrency+"가가"+toCurrency)
    let convertedAmount=amount * currencyRatio[selectCurrency][toCurrency]
    console.log("환전결과"+convertedAmount)


    //3. 환전된 값을 보이게 . convertamount를 아래칸 인풋에 표출
    document.getElementById("to-input").value=convertedAmount
    document.getElementById("from-currency").value=currencyRatio[selectCurrency]['unit']
    document.getElementById("to-currency").value=currencyRatio[toCurrency]['unit']

}
function ToConvert(){

    let ToAmount=document.getElementById("to-input").value;
    console.log(ToAmount);
    let convertedAmount1=ToAmount * currencyRatio[toCurrency][selectCurrency]
    console.log("환전결과 입니다"+convertedAmount1);
    document.getElementById("from-input").value=convertedAmount1;
    document.getElementById("from-currency").value=currencyRatio[selectCurrency]['unit']
    document.getElementById("to-currency").value=currencyRatio[toCurrency]['unit']




} 

