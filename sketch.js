var i;
var speed1 = new Array(13);
var speed2 = new Array(13);
var x = new Array(13);
var y = new Array(13);
function setup() {
    createCanvas(1720,880);  
      speed1[0]=2;
      speed2[0]=0;
      x[0]=10;
      y[0]=10;
      for(var i=1;i<13;i++){
      	speed1[i]=2;
      	speed2[i]=0;
      	x[i] = x[i-1]+140;
      	y[i] = 10;
      }
}
function draw() {
      background(105,105,105); 
      for(var i=40;i<width;i+=140){            
          for(var j=40;j<height;j+=140){
              fill(25,204,43);
              stroke(255,255,255);
              rect(i,j,100,100);

        }
      }
      //line(160,0,160,160);
      for(var i=0;i<13;i++){
      		move(i);
  	  }
}
function move(i){
    fill(255);
    rect(x[i],y[i],10,10);
    y[i]+=speed1[i];
    x[i]+=speed2[i];
    if(y[i]<height && y[i]>0 && x[i]>0 && x[i]<width)
    {
        if(((speed1[i]==2 || speed1[i]==-2) && (y[i]==10 || y[i]==150 || y[i]==290 || y[i]==430 || y[i]==570 || y[i]==710 || y[i]==850)) ||
            ((x[i]==10 || x[i]==150 || x[i]==290 || x[i]==430 || x[i]==570 || x[i]==710 || x[i]==850 || x[i]==990 ||
                x[i]==1130 || x[i]==1270 || x[i]==1410 || x[i]==1550 || x[i]==1690) && (speed2[i]==-2 || speed2[i]==2)))
        {
            var t=int(random(0,3.99));
            if(t==0){                        //right
                speed1[i]=0;
                speed2[i]=2;
            }
            else if(t==1){                   //left
                speed1[i]=0;
                speed2[i]=-2;
            }
            else if(t==2){                   //bottom
                speed1[i]=2;
                speed2[i]=0;
            }
            else if(t==3){                   //top
                speed1[i]=-2;
                speed2[i]=0;
            }
        }
    }
    if(x[i]==1720)						//car to again come back after going after of the screen
    	x[i]=0;
    else if(x[i]==0)
    	x[i]=1720;
    else if(y[i]==880)
    	y[i]=0;
    else if(y[i]==0)
    	y[i]=880;
}