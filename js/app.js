"use strict";

import Item from "./Item.js";

const app = {
    init() {
        const toDoForm = document.getElementById("inputForm");
        toDoForm.addEventListener("submit", this.submitHandler);
    },

    submitHandler(e) {
        e.preventDefault();

        const toDoField = document.getElementById("toDoField");
        const toDoItem = toDoField.value;
        app.createItem(toDoItem);
        toDoField.value = "";
    },

    createItem(item){
        const newItem = new Item(item);
        const itemList = document.getElementById("toDoList");
        itemList.innerHTML += newItem.htmlString;
    }
};

app.init();