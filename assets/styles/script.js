
// Clock
  
  function Time() {
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    var period = "";

    if (hour >= 12) {
      period = "PM";
    } else {
      period = "AM";
    }
    
    if (hour == 0) {
      hour = 12;
    } else {
      if (hour > 12) {
        hour = hour - 12;
      }
    }
    
    hour = update(hour);
    minute = update(minute);
    second = update(second);
    
    document.getElementById("time").innerText = hour + " : " + minute + " : " + second + " " + period;
    
    setTimeout(Time, 1000);
  }
  // Append 0 before time elements if they are less than 10
  function update(t) {
    if (t < 10) {
      return "0" + t;
    } else {
      return t;
    }
  }
  Time();


// Random color

  function setColor(x) {
    randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.getElementById(x).style.color = "#" + randomColor;
  }

  setColor("home");
  setColor("skills");


// Skill

  const skills = document.querySelectorAll("#skills > p");
  var sk = 0;

  function show() {
    skills[sk].style.display = "inline-block";
    skills[sk].style.opacity = 1;
    sk++;
  }


// jQuery repel cursor

  $(function(){

    var mouse = {'x': 0, 'y': 0};

    homex = 0;
    homey = 0;
    forcex = 0;
    forcey = 0;
    magnet = 5000;
    
    $(document).bind('mousemove', function(e) {
        mouse = {'x': e.pageX, 'y': e.pageY};
    }); 

    $('#skills p').each(function(index, el){
    $(el).data( "homex", parseInt($(el).position().left));
    $(el).data( "homey", parseInt($(el).position().top));
    });

    $('#skills p').css('position','absolute');
    setInterval(function () {
        $('#skills p').each(function(index, el){
            el = $(el);
            position = el.position();
            x0 = el.offset().left;
            y0 = el.offset().top;
            x1 = mouse.x;
            y1 = mouse.y;
            distancex = x1-x0;
            distancey = y1-y0;

            distance = Math.sqrt((distancex * distancex) + (distancey * distancey));
            
            powerx = x0 - (distancex / distance) * magnet / distance;
            powery = y0 - (distancey / distance) * magnet / distance;
            
            forcex = (forcex + (el.data('homex') - x0) / 10) / 2.1;
            forcey = (forcey + (el.data('homey') - y0) / 10) / 2.1;           

            el.css('left', powerx + forcex);
            el.css('top',  powery + forcey);
        });
    }, 15);
  });


// Random position

  order = document.getElementById("order");
  gather = document.getElementById("gather");
  shaping = document.getElementById("shaping");

  function randomPos(x) {
    x.style.top = (100*Math.random()) + "%";
    x.style.left = (100*Math.random()) + "%";
  }

  function disorder() {
    randomPos(gather);
  }

  window.onload = disorder();

