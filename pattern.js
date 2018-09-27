//what is patterns?

// A reusable solution that can be applied to occuring problems
// in software designs or js application

//can also be thought as programming templates

//list of design patterns

//Module,Revealing Module pattern,singlton,
// factory,observer,mediator,state

//module loader like :webpack
// comipler like babel

// console.log('design pattern');

//basic structure for module design pattern
// IIFE 

// (function(){
// declare private vars and functions
// 
// return{

    // declare public vars and functions
// }
// })();

// const UIctrl=(function(){

//     let text='Hello world';

//     const changeText=function(){
//     const element=document.querySelector('h1');
//     element.textContent=text;
//     }

//     return {
//         callChangeText:function(){
//              changeText();
//              console.log(text);
//     }
// }
// })();

// UIctrl.callChangeText();

// purpose make variable function private
// access then while returning in public

//Revealing module pattern:
// _ is used for private variables

const ItemCtrl=(function(){
let _data=[];
function add(item){
_data.push(item);
console.log('data added to list');
}

function get(id){
return _data.find( item =>{
return item.id ===id;
})
}

return {
    add:add,
    get:get
}

})();

ItemCtrl.add({id:1,name:'john'});
console.log(ItemCtrl.get(1));