"use strict";

import Item from "./Item.js";

const app = {
    init() {
        const toDoForm = document.getElementById("inputForm");
        toDoForm.addEventListener("submit", this.submitHandler);

        const clearButton = document.getElementById("clearAll");
        clearButton.addEventListener("click", this.clearAll);

        this.fetchList();
    },

    submitHandler(e) {
        e.preventDefault();

        const toDoField = document.getElementById("toDoField");
        const toDoItem = toDoField.value;
        app.createItem(toDoItem);
        toDoField.value = "";
    },

    fetchList() {
        const list = JSON.parse(localStorage.getItem("toDoList"));
        const toDoContainer = document.getElementById("toDoList");
        toDoContainer.innerHTML = "";
        if (list === null) {
            const emptyArr = JSON.stringify([]);
            localStorage.setItem("toDoList", emptyArr);
        } else {

            list.forEach(function (item) {
                const html = document.createElement("div.toDoItem");
                html.innerHTML = item._htmlString;
                toDoContainer.appendChild(html);
            });
        }
    },

    createItem(item) {
        const newItem = new Item(item);
    
        const listStored = JSON.parse(localStorage.getItem("toDoList"));
        listStored.push(newItem);
        localStorage.setItem("toDoList", JSON.stringify(listStored));
        this.fetchList();
    },

    clearAll() {
        localStorage.removeItem("toDoList");
        app.fetchList();
    }
};

app.init();