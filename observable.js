function EventObserver(){
    this.observers=[];
}

EventObserver.prototype={
    subscribe:function(fn){
        this.observers.push(fn);
        console.log(` you are now subscribed to ${fn}.name`);
    },
    unsubscribe:function(fn){
        this.observers=this.observers.filter(function(item){
        if(item !== fn){
         return item;
        }
        })
        console.log();
    }

    
}
