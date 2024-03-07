
const container = document.querySelector('.container');
const menuBar = document.querySelector(".menu-bar");
const leftBtn = document.querySelector(".left-btn")

const toggleScreen = () => {
    container.classList.toggle("show-category");
};

menuBar.addEventListener("click", toggleScreen);
leftBtn.addEventListener("click", toggleScreen);

const addTaskBtn = document.querySelector(".add-task-btn");
const addTaskForm = document.querySelector(".task-form");
const leftBackdrop = document.querySelector(".left-backdrop");

const toggleAddTaskForm = () => {
    addTaskForm.classList.toggle("active");
    leftBackdrop.classList.toggle("active");
    addTaskBtn.classList.toggle('active');

    //add the blur effect and fallback background color
    if (leftBackdrop.classList.contains("active")) {
        container.classList.add("blur-effect");
        leftBackdrop.classList.add("blur-effect");
        leftBackdrop.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
        leftBackdrop.style.backdropFilter = "blur(5px)";
    } else {
        container.classList.remove("blur-effect");
        leftBackdrop.classList.remove("blur-effect");
        leftBackdrop.style.backgroundColor = ""; // Reset to default
        leftBackdrop.style.backdropFilter = ""; // Reset to default
    }

};
addTaskBtn.addEventListener('click', toggleAddTaskForm);
leftBackdrop.addEventListener('click', toggleAddTaskForm);

//Add items to categories
let categories = [
    {
        title: "Personal",
        img: "personal .jpg"
    },
    {
        title: "Coding",
        img: "coding.jpeg"
    },
    {
        title: "Work",
        img: "work.jpeg"
    },
    {
        title: "Education",
        img: "education.jpeg"
    },
    {
        title: "Health",
        img: "health.jpeg"
    }
];

// add tasks
let tasks = [
    {
        id: 1,
        task: "Slip on banana peels",
        category: "Personal",
        completed: true,
    },
    {
        id: 2,
        task: "Don't skip a day without coding",
        category: "Coding",
        completed: false,
    },
    {
        id: 3,
        task: "Overcommiting to too many activities",
        category: "Work",
        completed: false,
    },
    {
        id: 4,
        task: "Skipping class",
        category: "Education",
        completed: false,
    },
    {
        id: 5,
        task: "Skip breakkfast",
        category: "Health",
        completed: false,
    },
    {
        id: 6,
        task: "Ignore posture",
        category: "Personal",
        completed: false,
    },
    {
        id: 7,
        task: "Copying and Paste",
        category: "Coding",
        completed: false,
    },
    {
        id: 8,
        task: "Wearing costume to the office",
        category: "Work",
        completed: false,
    },
    {
        id: 9,
        task: "Bullying",
        category: "Education",
        completed: false,
    },
    {
        id: 10,
        task: "Dehydration",
        category: "Heaith",
        completed: false,
    },
    {
        id: 11,
        task: "Negative self thought",
        category: "Personal",
        completed: false,
    },
    {
        id: 12,
        task: "Ignoring documentation",
        category: "Coding",
        completed: false,
    },
    {
        id: 13,
        task: "Skip gratitude",
        category: "Work",
        completed: false,
    },
    {
        id: 14,
        task: "Distraction",
        category: "Education",
        completed: false,
    },
    {
        id: 15,
        task: "Neglect sleep",
        category: "Health",
        completed: false,
    },
    {
        id: 16,
        task: "Cooking in  a rush",
        category: "Personal",
        completed: false,
    },
    {
        id: 17,
        task: "Isolating yourself",
        category: "Personal",
        completed: false,
    },
];

let selectedCategories = categories[0];

const categoriesContent = document.querySelector(".categories");
const categoryTitle = document.querySelector(".category-title");
const categoryTasks = document.querySelector(".category-tasks");
const categoryImg = document.querySelector("#category-img");
const totalTasks = document.querySelector(".totalTasks");

// calculate total tasks
const calculateTotal = () => {
    const categoryTasks = tasks.filter(
        (task) => task.category.toLowerCase() === selectedCategories.title
        .toLowerCase()
    );
    categoryTasks.innerHTML = `${categoryTasks.length} Tasks`;
    totalTasks.innerHTML = tasks.length;
};
calculateTotal();

const renderCategories = () => {
    categoriesContent.innerHTML = "";
    categories.forEach((category) => {
        // get the tasks for current category using filter method
        const categoryTasks = tasks.filter(
            (task) => task.category.toLowerCase() === category.title.toLowerCase()
        );

        // create a div to render category
       const div = document.createElement("div");
        div.classList.add("category");
        div.addEventListener("click", () => {
            container.classList.add("show-category");
            selectedCategories = category;
            console.log(selectedCategories);
            categoryTitle.innerHTML = category.title;
            categoryImg.src = `images/${category.img}`;
            calculateTotal();
            // rerender task when category changes
            renderTasks();
        });
        div.innerHTML = `
                            <div class="content">
                                <img src="images/${category.img}" 
                                alt="${category.title}"/>
                                <div class="right">
                                    <h1>${category.title}</h1>
                                    <p>${categoryTasks.length} Tasks</p>
                                </div>
                            </div>
                            <div class="options">
                                <div class="toggle-btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" 
                                    viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                    class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" 
                                    d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 
                                    12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 
                                    0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                                    </svg>
                                      
                                </div>
                            </div>
                            `;
                            categoriesContent.appendChild(div);
    });
};
const tasksContainer = document.querySelector(".tasks");

const renderTasks = () => {
    tasksContainer.innerHTML = "";
    const categoryTasks = tasks.filter(
        (task) => task.category.toLowerCase() === selectedCategories.title
        .toLowerCase()
    );
    // if no task for selected category
    if (categoryTasks.length === 0) {
        tasksContainer.innerHTML = `<p class="no-task">No tasks for this category</p>`;
    } else {
        // if there are task for selected category
        categoryTasks.forEach((task) => {
            const div = document.createElement("div");
            div.classList.add("task-container");
            const label = document.createElement("label");
            label.classList.add("task");
            label.setAttribute("for", task.id);
            const checkBox = document.createElement("input");
            checkBox.type = "checkbox";
            checkBox.id = task.id;
            checkBox.checked = task.completed;

            // activate completion when checkbox is clicked
            checkBox.addEventListener("change", () => {
                const index = tasks.findIndex((t) => t.id === task.id);
                // change the true to false and vice versa
                tasks[index].completed = !tasks[index].completed;
                // save to local storage
                saveLocal();
            });

            div.innerHTML = `
            <div class="delete">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107
                  1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                </svg> 
            </div>
            `;

           label.innerHTML = `
            <span class="checkmark">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" 
                  viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
                  class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" 
                  d="m4.5 12.75 6 6 9-13.5" />
               </svg>
            </span>
            <p>${task.task}</p>
            `;

            label.prepend(checkBox);
            div.prepend(label);
            tasksContainer.appendChild(div);

            // delete completion when checkbox is clicked
            const deleteBtn = div.querySelector(".delete");
            deleteBtn.addEventListener("click", () => {
                const index = tasks.findIndex((t) => t.id === task.id);

                //remove clicked task using splice
                tasks.splice(index, 1);
                saveLocal();
                renderTasks();
            });
        });
    }
};
// save tasks from local storage
const saveLocal = () => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
};
// get tasks from local storage
const getLocal = () => {
    const localTasks = JSON.parse(localStorage.getItem("tasks"));

    // if task is found
if (localTasks) {
    tasks = localTasks;
}

};

//render all the categories in select
const selectCategory = document.querySelector("#select-category");
const cancelBtn = document.querySelector(".cancel-btn");
const addBtn = document.querySelector(".add-btn");
taskInput = document.querySelector("#task-input");

cancelBtn.addEventListener("click", toggleAddTaskForm);

addBtn.addEventListener("click", () => {
    const task = taskInput.value;
    const category = selectCategory.value;

    //if task has not been inputted, display a dialog box
    if ((task === "")) {
        alert("Please enter a task");
    } else{
        //add new task to the category
        const newTask = {
            id: tasks.length + 1,
            task,
            category,
            completed: false,
        };
        tasks.push(newTask);
        taskInput.value = "";

        saveLocal();
        toggleAddTaskForm();
        renderTasks();
    }

});

categories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category.title.toLowerCase();
    option.textContent = category.title;
    selectCategory.appendChild(option);
});
getLocal();
calculateTotal();
renderCategories();
renderTasks();




