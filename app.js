// Controller which works with desktop
var uiController = (function() {})();
//Controller which works with finance
var financeController = (function() {})();
//Controller that connects app
var appController = (function(uiController, financeController) {
  var ctrlAddItem = function() {
    //1. get datas from desktop
    console.log("ajillaa");
    //2. Transfer datas that gathered from desktop to financeController and save there.
    //3. display datas that gathered on web properly.
    //4. Calculate finance
    //5. Display a calculated data in web.
  };
  document.querySelector(".add__btn").addEventListener("click", function() {
    ctrlAddItem();
  });

  document.addEventListener("keypress", function(event) {
    if (event.keyCode === 13 || event.which === 13) ctrlAddItem();
  });
})(uiController, financeController);
