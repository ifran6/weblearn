(function(){
// alert(0.00);

console.log(4*5);

// random generate


// RandomGenerateNum();
})(); 

function randomGenerateNum(){
    const randomNumber = Math.random();

    if(randomNumber >=0 && randomNumber < 1/3){
        console.log(`Rock ${randomNumber}`);
    }else if(randomNumber>= 1/3 && randomNumber < 2/3){
        console.log(`Paper ${randomNumber}`);
    }else if(randomNumber>= 2/3 && randomNumber < 1){
        console.log(`Scissors ${randomNumber}`);
    }
}

function messageAlert(){
    alert('you clicked on Scissors');
}

function calculateTax10(){
    console.log(25000*0.1);
}


function calculateTaxParams(parameter){
    console.log(parameter*0.1);
}

const product = {
    name:'Basics',
    price:10000,
    tagLine:'...Beyound coding'
}

console.log(product);

function productJsonTest(){
    productItem = {
        name: "Books",
        category:'Poem',
        writer:"by Henry",
        createdat:"february"
    }

    console.log(JSON.stringify(productItem));
}

// converting JSON to javascript
function convertToJavaScript(){
    productJsonTest();
    let jsonObject = JSON.stringify(productItem);

    // back to js object
    console.log(JSON.parse(jsonObject));
}


function localStorageJs(){
    productItem = {
        name: "Books",
        category:'Poem',
        writer:"by Henry",
        createdate:"february"
    }
    console.log(productItem['createdate']);
    localStorage.setItem('message','hello, Good morning Sir');
    localStorage.setItem('products', JSON.stringify(productItem));

    // let getMsg = localStorage.getItem('products');
    let getMsg = localStorage.getItem('products');

    console.log(getMsg);
}


function clickSample(){
    let btnElem = document.querySelector('.btn_sample');
        alert("sample btn clicked");
        btnElem.textContent="uhmm!, sample clicked";
        btnElem.classList.add('isbtn_sample');
    
}

// pic
// toggle subscribe button
function subscribehandler(){
   let sub_handler = document.querySelector('.btn__subscribe');

   if(sub_handler.innerHTML = 'Subscribe'){
    sub_handler.innerHTML="Subscribed";
    sub_handler.classList.add('is_subscribed');
   }else{
    sub_handler.textContent = "Subscribe";
    sub_handler.classList.remove('is_subscribed');
   }
}

function calculatorHandler(){
    let cost_of_Order = document.querySelector('.cost_Order').value;
    let cost__screen = document.querySelector('.cost_screen');
   
   if(cost_of_Order !==""){
    if(!isNaN(cost_of_Order))
        {
            if(cost_of_Order < 40 ){
                cost_of_Order = Number(cost_of_Order) + (10); 
                cost__screen.innerText = `Cost of Order is $${cost_of_Order}`;
            }else{
                // cost_of_Order = cost_of_Order; 
                cost__screen.innerText=`Cost of Order is $${cost_of_Order}`;
            }
           
        }else{
           cost__screen.textContent = 'Hmm!, Cost of Order must be a number';
        }
   }else{
    cost__screen.textContent = 'Uhmmm!, Please Enter the Cost!';
   }
}

function typeHandler(){
    let cost__screen = document.querySelector('.cost_screen');

    cost__screen.textContent = 'Typing .......';
}

// window // browser events
 function windowEventSamples(){
    // window.document.
 }


//  todo Addd
const todoList = [];


function todoAdd(){
    let todoListScreen = document.querySelector('.todo_list');
    let todoInputElem = document.querySelector('.todo_name_input');

    let nameElem = todoInputElem.value;
    todoListScreen.textContent = nameElem;
    todoList.push(nameElem);
    todoInputElem.value = '';
}

// whileLoop for none Standard Loop
function whileLoopTest(){
     let i = 1;
     while(i <= 5 ){
        console.log(`while loop ${i}`);
        i = i+1;
     }
}

whileLoopTest();

let randomNumber = 0;
while (randomNumber <= 0.5){
   randomNumber = Math.random();
}
console.log(`@ random ${randomNumber}`);

// for Loop

for(let i = 1; i <= 5; i++){
 console.log(`hello world ${i}`);
}

// to count index of an array

const todoListarray = ['lunch', 'dinner', 'break fast', 'app'];

for(let index = 0; index <= todoListarray.length-1; index++){
    let indexValue = todoListarray[index];
    console.log(`index counts ${indexValue}`);
}

// the shortcuts to the above loop
for(let index = 0; index < todoListarray.length; index++){
    let indexValue = todoListarray[index];
    console.log(`using short-hand ${indexValue}`);
}

// the shortcuts to the above loop
for(let i = 0; i < todoListarray.length; i++){
    let indexValue = todoListarray[i];
    console.log(`using letter I ${indexValue}`);
}

// Accumlator parttern calculating the total
const nums = [1,1,3];
let result  = 0;

for(let i = 0; i < nums.length; i++){
    const num = nums[i];
    result += num;
}

console.log(`sum of the array value ${result}`);

// advance function

setTimeout(function(){
    console.log('SetTimeOut Testing');
}, 1000);

// setInterval(function(){
//     let i = 0;
//     i++;
//     alert(`it icreases by 3secs ${1}`);
// }, 2000);]

// function with parameter
let product_screen = document.querySelector('.product_screen');
let sum_screen = document.querySelector('.sum_screen');
let divides_screen = document.querySelector('.division_screen');

function productHandler(param1, param2){
    let product = param1 * param2;
    let result = `the Product is ${product} \n`;
    setTimeout(function(){
        product_screen.textContent = result;
    });
}

function sumHandler(param1, param2){
    let sum = param1 + param2;
    let result = `the Sum is ${sum} \n`;
    setTimeout(function(){
        sum_screen.innerText = result;
    });
}

function divisionHandler(param1, param2){
    let divide = param1 / param2;
    let result = `the result of the division is ${divide}`;
    setTimeout(function(){
        divides_screen.innerHTML = result;
    });
}

productHandler(6, 5);
sumHandler(5,7);
divisionHandler(120,6);

