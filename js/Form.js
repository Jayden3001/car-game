class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
  }
  //hide() on line number 12 is just a name for a function form class
  //hide() on line number 13,14,15,16 is the ready made function belonging to the dom
  
    hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  display(){
    this.title.html("Car Racing Game");
    this.title.position(displayWidth/2 - 50, 0);
   
    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.button.position(displayWidth/2 + 30, displayHeight/2);
    // ()=> means function()
    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      // where storing the information entered inside 
      //the input as the name of our player object
      player.name = this.input.value();
      playerCount+=1;
      //player count+=1 is consize way of writing player count = player count 1 
      player.index = playerCount;
      // updating the value of the the player count  inside the database 
      player.update();
      // updating the name and the index in the database
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
    });

  }
}
