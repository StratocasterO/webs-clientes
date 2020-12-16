
    function openFunction(){
        document.getElementById("menu").style.width="300px";
        document.getElementById("mainbox").style.marginRight="0px";
       }
      function closeFunction(){
       document.getElementById("menu").style.width="0px";
       document.getElementById("mainbox").style.marginLeft="0px";
       
      }
      const btnSwitch = document.querySelector('#switch');
         
      btn.Switch.addEventlistener('click', () =>{
          document.body.classList.toggle('cat');
          btnSwitch.classList.toggle('activado');
      });
    