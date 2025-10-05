const items = [
    { name: "Eggs", bought: false} ,
    { name: "Bread", bought: true} ,
    { name: "Milk", bought: true} ,
    { name: "Pizza", bought: false} ,
];

const shoppingList = document.getElementById('shoppingList');

const createListItem = (item) => {
    const newItem = document.createElement("li");
    newItem.textContent = item.name;

    if(item.bought) {
        newItem.classList.add("bought");
    }

    return newItem;
}

items.forEach(item => {
        shoppingList.appendChild(
            createListItem(item)
        );
    }
);