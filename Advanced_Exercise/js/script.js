"use strict";
//creating product catalog (array of objects)
let items = [
    {
        itemName: "Bread",
        picture: "./images/bread-2193537_640.jpg",
        toDo: "Buy 1 loaf of dark bread",
        importance: 0,
        deadline: "12.06.2024",
        done: false,
    },
    {
        itemName: "Eggs",
        picture: "./images/egg-7345934_640.jpg",
        toDo: "Buy 12 eggs from happy chickens",
        importance: 0,
        deadline: "12.06.2024",
        done: false,
    },
    {
        itemName: "Fish",
        picture: "./images/fish-8210152_640.jpg",
        toDo: "2 medium sized marine fish",
        importance: 0,
        deadline: "12.06.2024",
        done: false,
    },
    {
        itemName: "Steaks for BBQ",
        picture: "./images/flesh-3139641_640.jpg",
        toDo: "4 pieces will do",
        importance: 0,
        deadline: "15.06.2024",
        done: false,
    },
    {
        itemName: "Fruit Juice",
        picture: "./images/fruit-juice-1700565_640.jpg",
        toDo: "Need at least 5 L of various juices",
        importance: 0,
        deadline: "15.06.2024",
        done: false,
    },
    {
        itemName: "Red Apples",
        picture: "./images/fuji-apple-8228073_640.jpg",
        toDo: "Buy 1 kg of apples. 'Gala' is my favourite variety.",
        importance: 0,
        deadline: "12.06.2024",
        done: false,
    },
    {
        itemName: "Potatoes",
        picture: "./images/potato-3440360_640.jpg",
        toDo: "Bring 2 kg potatoes, for wedges",
        importance: 0,
        deadline: "15.06.2024",
        done: false,
    },
    {
        itemName: "Sausage platter",
        picture: "./images/sausage-4873861_640.jpg",
        toDo: "We need 2 big platters with different kinds of sausage.",
        importance: 0,
        deadline: "15.06.2024",
        done: false,
    },
    {
        itemName: "Toilet paper",
        picture: "./images/toilet-paper-3964492_640.jpg",
        toDo: "Need 10 rolls or we run out of our supplies.",
        importance: 0,
        deadline: "10.06.2024",
        done: false,
    },
    {
        itemName: "Creamy chocolate",
        picture: "./images/white-chocolate-380702_640.jpg",
        toDo: "2 or 3 bars, preferably white chocolate",
        importance: 0,
        deadline: "12.06.2024",
        done: false,
    },
    {
        itemName: "Red and white wine",
        picture: "./images/wine-2408620_640.jpg",
        toDo: "2 bottles red and 2 bottles white",
        importance: 0,
        deadline: "15.06.2024",
        done: false,
    },
    {
        itemName: "Fruit yoghurt",
        picture: "./images/yoghurt-670343_640.jpg",
        toDo: "buy at least 3 cups, strawberry is my favourite",
        importance: 0,
        deadline: "12.06.2024",
        done: false,
    },
];
// rendering the picture gallery
function renderItems(arr) {
    document.getElementById("grid-anchor").innerHTML = "";
    for (const item of arr) {
        document.getElementById("grid-anchor").innerHTML += `
  <div class="card-outer-div">
    <div class="card mt-3">
      <div class="d-flex justify-content-between">
        <button type="button" class="btn btn-sm m-2 task-btn">Task</button>
        <p class="fs-5 fw-bold m-2" >&#8942;</p>
      </div>
      <img src="${item.picture}" class="card-img-top img-fluid p-2" alt="">
      <div class="card-body">
        <h5 class="card-title">${item.itemName}</h5>
        <p class="card-text">${item.toDo}</p>
        <hr>
        <div class="d-flex align-items-baseline">
          <p class="me-2" >&#9888; Priority level:</p>
          <button type="button" class="btn btn-success btn-priority"><span class="noPriority">${item.importance}</span></button>
        </div>
        <p>&#128197; Deadline: ${item.deadline}</p>
        <hr>
        <div class="d-flex justify-content-end">
          <span class="done-symbol me-5"></span>
          <button type="button" class="btn btn-danger btn-sm me-3 btn-delete">Delete</button>
          <button type="button" class="btn btn-success btn-sm btn-done">Done</button>
        </div>
      </div>
    </div>
  </div>
      `;
    }
    //add click events
    //priority button
    let priorityButtons = document.querySelectorAll(".btn-priority");
    //increase priority level
    priorityButtons.forEach((element, index) => {
        console.log(typeof element);
        let btn = element;
        //change background of button on re-rendering
        if (arr[index].importance > 3) {
            btn.classList.add("btn-danger");
            btn.classList.remove("btn-success");
        }
        else if (arr[index].importance > 1) {
            btn.classList.add("btn-warning");
            btn.classList.remove("btn-success");
        }
        btn.addEventListener("click", () => {
            if (arr[index].importance < 5) {
                arr[index].importance++;
                btn.innerText = arr[index].importance;
            }
            //change background of button on clicking
            if (arr[index].importance > 3) {
                btn.classList.add("btn-danger");
                btn.classList.remove("btn-success");
            }
            else if (arr[index].importance > 1) {
                btn.classList.add("btn-warning");
                btn.classList.remove("btn-success");
            }
        });
    });
    //Done-Button
    let doneButtons = document.querySelectorAll(".btn-done");
    let doneSymbols = document.querySelectorAll(".done-symbol");
    doneButtons.forEach((element, index) => {
        element.addEventListener("click", () => {
            if (arr[index].done == false) {
                arr[index].done = true;
                doneSymbols[index].innerHTML = "&#9989;";
            }
            else {
                arr[index].done = false;
                doneSymbols[index].innerHTML = "";
            }
        });
    });
    //Delete-Button
    let deleteButtons = document.querySelectorAll(".btn-delete");
    deleteButtons.forEach((element, index) => {
        element.addEventListener("click", () => {
            arr.splice(index, 1);
            renderItems(items);
        });
    });
}
//create card gallery
renderItems(items);
//Sort button
const sortBtn = document.getElementById("btn-sort");
console.log("SortBtn: " + typeof sortBtn); //object
let sortedArray = [];
function sortArray(imp) {
    items.forEach((element, index) => {
        if (element.importance == imp) {
            let val = items.slice(index, index + 1);
            sortedArray.push(val[0]);
            if (sortedArray.length == items.length) {
                items = sortedArray;
                renderItems(items);
                sortedArray = [];
            }
        }
    });
}
sortBtn.addEventListener("click", () => {
    sortArray(5);
    sortArray(4);
    sortArray(3);
    sortArray(2);
    sortArray(1);
    sortArray(0);
});
