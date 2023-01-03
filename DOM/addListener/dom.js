/* <h1>7.스타일 다루기(classList) : 아코디언</h1> */
window.addEventListener("load", function(){
    var sectionS7 = document.querySelector("#s7");
    var boxS7 = sectionS7.querySelector(".box-s7");
    var current = sectionS7.querySelector(".active");

    boxS7.onclick= function(e){

        var valid = e.target.nodeName == "H2" || e.target.classList.contains("accordion-header");
        // if((e.target.nodeName != "H2") && (e.target.className != "accordion-header"))
        if(!valid)
            return;

        if(current != null)
            current.classList.remove("active");

        e.target.classList.add("active");
        current = e.target;
        

    }
})


// <h1>6. 스타일 다루기 : 아이템 이동하기</h1>
window.addEventListener("load",function(){
    var sectionS6 = document.querySelector("#s6");
    var btnNext = sectionS6.querySelector(".btn-next");
    var lis = sectionS6.querySelectorAll("li");

    var offIndex = 0;


    btnNext.onclick = function(e){
        e.preventDefault();

        offIndex++;
        var sizeS6 = lis.length;

        lis[(0+offIndex)%sizeS6].className="card-1th";
        lis[(1+offIndex)%sizeS6].className="card-2th";
        lis[(2+offIndex)%sizeS6].className="card-3th";

        // lis[(0+offIndex)%sizeS6].style.left="0px";
        // lis[(0+offIndex)%sizeS6].style.width="100px";
        // lis[(0+offIndex)%sizeS6].style.height="150px";
        
        // lis[(1+offIndex)%sizeS6].style.left="calc(50% - 60px)";
        // lis[(1+offIndex)%sizeS6].style.width="120px";
        // lis[(1+offIndex)%sizeS6].style.height="180px";
        
        // lis[(2+offIndex)%sizeS6].style.left="calc(100% - 100px)";
        // lis[(2+offIndex)%sizeS6].style.width="100px";
        // lis[(2+offIndex)%sizeS6].style.height="150px";
    };


})



// 5.스타일 다루기 : 값 입력과 동적으로 박스 스타일 변경

window.addEventListener("load", function(){
    var sectionS5 = document.querySelector("#s5");
    var styleInputS5 = sectionS5.querySelector(".style-input-s5");
    var widthInputS5 = sectionS5.querySelector(".width-input-s5");
    var radiusInputS5 = sectionS5.querySelector(".radius-input-s5");
    var colorInputS5 = sectionS5.querySelector(".color-input-s5");
    
    var itemS5 = sectionS5.querySelector(".item-s5");
    var outputS5 = sectionS5.querySelector(".output-s5");


    styleInputS5.oninput = function(e){
        itemS5.style.borderStyrle = styleInputS5.value;
        outputS5.innerText = itemS5.style.cssText;
    };
    widthInputS5.oninput = function(e){
        itemS5.style.borderWidth = widthInputS5.value+"px";
        outputS5.innerText = itemS5.style.cssText;
    };
    radiusInputS5.oninput = function(e){
        itemS5.style.borderRadius = radiusInputS5.value+"px";
        outputS5.innerText = itemS5.style.cssText;
    };
    colorInputS5.oninput = function(e){
        itemS5.style.borderColor = colorInputS5.value;
        outputS5.innerText = itemS5.style.cssText;
    };

    // styleInputS5.oninput = function(){
    //     console.log(styleInputS5.value);
    // }
    // widthInputS5.oninput = function(){
    //     console.log(widthInputS5.value);
    // }

})



/* <h1>4. 이벤트 객체 : 그리드를 이용한 개선된 계산기</h1> */
window.addEventListener("load", function(){
    var sectionS4 = document.querySelector("#s4");
    var textS4 = sectionS4.querySelector("input[type=text]");
    
    // var numS3 = sectionS3.querySelectorAll(".num");
    var boxS4 = sectionS4.querySelector("div");
    var divInputS4 = boxS4.querySelector("input[value='/']");

    divInputS4.onclick = function(e){
        e.stopPropagation();
        console.log("나눗셈 연산");
    };

    
    boxS4.onclick = function(e){
        e.preventDefault();
        if(e.target.nodeName != 'INPUT')
            return;

        console.log("클릭");
        textS4.value += e.target.value;
    };
});

// <h1>3. 이벤트 객체 : 개선된 계산기</h1>
window.addEventListener("load", function(){
    var sectionS3 = document.querySelector("#s3");
    var textS3 = sectionS3.querySelector("input[type=text]");
    
    // var numS3 = sectionS3.querySelectorAll(".num");
    var boxS3 = sectionS3.querySelector("div");

    
    boxS3.onclick = function(e){
        if(e.target.nodeName != 'INPUT')
            return;
        textS3.value += e.target.value;
    };
        // if(e.target.nodeName == 'INPUT')
        //     textS3.value += e.target.value;
    // var btnS3ClickHandler = function(e){
    //     numS3 = e.target.value;
    //     console.log(numS3);
    // };

    // for(var i=0; i<numS3.length; i++)
    //     textS3[i] = btnS3ClickHandler;
});


// <h1>2. Dom 속성 다루기 : 계산기</h1>

window.addEventListener("load", function(){
    var sectionS2 = document.querySelector("#s2");
    var xInput = sectionS2.querySelector(".x-input");
    var yInput = sectionS2.querySelector(".y-input");
    var buttonS2 = sectionS2.querySelector(".button");
    var s2Span = sectionS2.querySelector("div>span>span");

    buttonS2.onclick = function(){
        var x = parseInt(xInput.value);
        var y = parseInt(yInput.value);

        // s2Span.innerHTML = "계산결과 : " + (x+y);
        s2Span.textContent = x + y;
    }
})


// <h1>1. 노드 선택방법</h1>

window.addEventListener("load",function(){

    // var section = document.getElementById("s1");
    // var txtInput = section.getElementsByClassName("txtinput")[0];
    // var button = section.getElementsByClassName("button")[0];
    // 쿼리 셀럭터를 이용
    var sectionS1 = document.querySelector("#s1");
    // var txtInput = section.querySelectorAll(".txtinput");
    var txtInput = sectionS1.querySelector("input[type=text]");
    var buttonS1 = sectionS1.querySelectorAll(".button");

    buttonS1.onclick = function(){
        txtInput.value="안녕하세요";
    };
});

// ---------------------------------------------
window.addEventListener("load", function(){
    var btnPrint = document.getElementById("btn-print");
    btnPrint.onclick = printSum;

    function printSum(){
        var x = prompt('x : ');
        var y = prompt('y : ');
    
        x = parseInt(x);
        y = parseInt(y);
    
        console.log(x+y);
    }
});