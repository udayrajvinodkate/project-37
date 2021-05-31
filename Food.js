class food {
    constructor(){
        this.foodStock = 0;
        this.image1 = loadImage("images/Milk.png");
        this.Bedroom = loadImage("images/Bed Room Dog.png");
        this.Garden = loadImage("images/Garden Dog.png");
        this.Washroom = loadImage("images/Wash Room.png");
    }

    bedroom(){
        background(this.Bedroom,550,500);
    }

    garden(){
        background(this.Garden,550,500);
    }

    washroom(){
        background(this.Washroom,550,500);
    }

    updateFoodStock(foodStock){
        this.foodStock=foodStock;
    }
      
    deductFood(){
        if(this.foodStock>0){
          this.foodStock=this.foodStock-1;
        }
    }
      
    getFoodStock(){
        return this.foodStock;
    }
      
    display(){
        var x = 80, y = 100;
        imageMode(CENTER);
        if(this.foodStock !== 0){
            for(var i = 0; i < this.foodStock; i++){
                if(i%10 === 0){
                    x = 80;
                    y = y+ 50;
                }
                image(this.image1,x,y,50,50);
                x =x + 30;
            }
        }
    }
}