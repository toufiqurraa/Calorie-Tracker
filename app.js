// Strorage Controller

// Item Controller
const ItemCtrl = (function () {
  // Item Constructor
  const Item = function (id, name, calories) {
    this.id = id;
    this.name = name;
    this.calories = calories;
  };

  // State
  const data = {
    items: [
      { id: 0, name: "Steak Dinner", calories: 1200 },
      { id: 1, name: "Cookie", calories: 400 },
      { id: 0, name: "Eggs", calories: 300 },
    ],
    currentItem: null,
    totalCalories: 0,
  };

  // Public method
  return {
    getItems: function () {
      return data.items;
    },
    logData: function () {
      return data;
    },
  };
})();

// UI Controller
const UICtrl = (function () {
  const UISelector = {
    itemList: "#item-list",
  };
  // Public methor
  return {
    populateItemList: function (items) {
      let html = "";

      items.forEach(function (item) {
        html += `<li id='item=${item.id}' class='collection-item'>
        <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
                <a href="#" class="secondary-content">
                    <i class="edit-item fa fa-pencil"></i>
                </a>
            </li>
        `;
      });

      // Insert list items
      document.querySelector(UISelector.itemList).innerHTML = html;
    },
  };
})();

// App Contoller
const App = (function (ItemCtrl, UICtrl) {
  // Public method
  return {
    init: function () {
      // Fetch items from state
      const items = ItemCtrl.getItems();

      // Populate list with items
      UICtrl.populateItemList(items);
    },
  };
})(ItemCtrl, UICtrl);

// Initialize App
App.init();
