;(function(){
    var ns="Qeao";
    this[ns]=function(){
        this.name="Qeao";
        this.init();
    };
    this[ns].prototype.init=function(){
        console.log("this.name");
    };
})() + (function(){return new Qeao})() && "Qeao lib build";