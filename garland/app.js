function App()  {   
    this.drawCircle = function() {
       let div = document.createElement('div');
        let that = this
       var interval = 10;
       var steps = 1000/interval;
       var step_u = 1.0/steps;
       var u = 0.0;
      setInterval(function(){           
           u += step_u;
           div.style.backgroundColor = that.getRandomColor(u)
       }, interval)      
       document.body.appendChild(div)     
    };  

    this.handler = function() {      
        this.drawCircle()      
    };

    this.getRandomColor = function(alpha) {    
        // get static color not random
        let a = alpha
        let r = Math.floor(Math.random() * 255)
        let g = Math.floor(Math.random() * 255)
        let b = Math.floor(Math.random() * 255)
        return `rgba(${r},${g},${b},${a})`
    };   
}

var circle = new App()









