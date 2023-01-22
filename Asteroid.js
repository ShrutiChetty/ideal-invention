class Asteroid{
    constructor(){
        this.asteroid = createImg("asteroid.png");
        this.asteroidfire = createImg("asteroidfire.png");
        this.positionX = Math.floor(Math.random*windowWidth);
        this.positionY = windowHeight;
        this.colors = ["red","orange","yellow","green","blue","purple","pink","white","black","grey","brown"];
        this.color = "";
    }
    
    createAsteroid(){
        this.asteroid.positionX = math.Floor(math.Random*windowWidth);
        this.asteroid.positionY = math.Floor(math.Random*windowWidth);
        this.asteroidfire.positionX = this.asteroid.positionX;
        this.asteroidfire.positionY = windowHeight+20;
        this.asteroid.velocityX = -2;
        this.asteroid.velocityY = -2;
        this.asteroidfire.velocityX = -2;
        this.asteroidfire.velocityY = -2;
        this.color = this.colors[math.Floor((math.Random*11)-1)];
        }

}