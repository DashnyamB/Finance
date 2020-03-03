// Controller which works with desktop
var uiController = (function() {
  var DOMstrings = {
    inputType: ".add__type",
    inputDescription: ".add__description",
    inputValue: ".add__value",
    addBtn: ".add__btn"
  };
  return {
    getInput: function() {
      return {
        type: document.querySelector(DOMstrings.inputType).value,
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: document.querySelector(DOMstrings.inputValue).value
      };
    },
    getDOMstrings: function() {
      return DOMstrings;
    }
  };
})();
//Controller which works with finance
var financeController = (function() {})();
//Controller that connects app
var appController = (function(uiController, financeController) {
  var DOM = uiController.getDOMstrings();
  var ctrlAddItem = function() {
    //1. get datas from desktop
    console.log(uiController.getInput());
    //2. Transfer datas that gathered from desktop to financeController and save there.
    //3. display datas that gathered on web properly.
    //4. Calculate finance
    //5. Display a calculated data in web.
  };
  document.querySelector(DOM.addBtn).addEventListener("click", function() {
    ctrlAddItem();
  });

  document.addEventListener("keypress", function(event) {
    if (event.keyCode === 13 || event.which === 13) ctrlAddItem();
  });
})(uiController, financeController);
