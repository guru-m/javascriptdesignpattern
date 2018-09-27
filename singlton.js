console.log('hey this is singlton');

//it will only return only one instance of the pattern
// repeted call of constructor is return the same instance
// it will also maintain a private member which can not
//be outside access
//it will give us a global point of access 
//rather then encapsulation

const Singlton=(function(){
    let instance;
    function createInstance(){
        // const object =new Object('object instance');
        const object =new Object({name:'guru'});
        return object;
    }
    return{
        getInstance:function(){
if(!instance){
    instance=createInstance();
}
return instance;
        }
    }
})();

const instanceA=Singlton.getInstance();
console.log(instanceA);
const instanceB=Singlton.getInstance();
console.log(instanceA === instanceB);

