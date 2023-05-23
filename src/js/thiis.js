AOS.init({
    duration: 1500,
          })
          document.querySelector("#overlayToggle").addEventListener("click", (e) => {
            e.preventDefault();
            document.querySelector("#overlayMenu").classList.toggle("right-[-1000px]");
            document.querySelector("#overlayMenu").classList.toggle("right-0");
          });
          
          document.querySelector("#closeOverlayToggle").addEventListener("click", (e) => {
            e.preventDefault();
            document.querySelector("#overlayMenu").classList.remove("right-0");
            document.querySelector("#overlayMenu").classList.add("right-[-1000px]");
          });
        var openButton = document.getElementById('open');
        var dialog = document.getElementById('dialog');
        var closeButton = document.getElementById('close');
        var overlay = document.getElementById('overlay');
        var closeeButton = document.getElementById('closee');
        var opeenButton = document.getElementById('opeen');
    
        // show the overlay and the dialog
        openButton.addEventListener('click', function () {
            dialog.classList.remove('hidden');
            overlay.classList.remove('hidden');
        });
    
        // hide the overlay and the dialog
        closeButton.addEventListener('click', function () {
            dialog.classList.add('hidden');
            overlay.classList.add('hidden');
        });
        opeenButton.addEventListener('click', function () {
          dialog.classList.remove('hidden');
          overlay.classList.remove('hidden');
      });
    
      // hide the overlay and the dialog
      closeButton.addEventListener('click', function () {
          dialog.classList.add('hidden');
          overlay.classList.add('hidden');
      });
        closeeButton.addEventListener('click', function () {
          dialog.classList.add('hidden');
          overlay.classList.add('hidden');
      });
    