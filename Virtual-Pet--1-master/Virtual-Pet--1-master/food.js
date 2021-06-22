class Food{
    constructor(){
        this.foodStock = 0;
        this.image = loadImage("images/Milk.png");
    }
getFoodStock(){
    return this.foodStock

}
updateFoodStock(x){
    this.foodStock = x;
}
display(){
    var x = 80, y = 100;
    imageMode(CENTER)
    if(this.foodStock !==0){
        for(var i = 0; i<this.foodStock; i++){
            if(i%10 ===0){
                y+=50;
                x=80;
            }
            image(this.image,x,y,50,50)
            x+=30;
        }
    }
}
}