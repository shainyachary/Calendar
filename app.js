let daysTag = document.querySelector(".days");
let currentDate = document.querySelector(".current-date");
let preNxtBtn = document.querySelectorAll(".icons span");


let date = new Date();
let currentYear = date.getFullYear();
let currentMonth = date.getMonth();

let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

let getCalendar = () => {

    //last date of month
    let lastDateOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    
    //first day of the month
    let firstDayofMonth = new Date(currentYear, currentMonth, 1).getDay();

    //last day of the month
    let lastDayofMonth = new Date(currentYear, currentMonth, lastDateOfMonth).getDay();

    //last date of last month
    let lastDateofLastMonth = new Date(currentYear, currentMonth, 0).getDate();
    console.log(lastDateofLastMonth)

    let liTag = "";
    

    //last date of last month
    for(let i = firstDayofMonth; i >0; i--){
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`
    }
    

    // getting all dates of the months
    for(let i = 1; i<=lastDateOfMonth; i++){
        // getting days of each date
        let day = new Date(currentYear, currentMonth, i).getDay();

        let isSun = day === 0 ? "sun" : "";

        //getting today date
        let isToday =
         i === date.getDate() && currentMonth === new Date().getMonth() && currentYear === new Date().getFullYear()
         ? "today" : "";
        liTag += `<li class="${isToday} ${isSun}">${i}</li>`
    }

    for(let i = lastDayofMonth; i<6; i++){
        liTag +=`<li class="inactive">${i - lastDayofMonth + 1}</li>`
    }

    //current Year & month
    currentDate.innerHTML = `${months[currentMonth]}, ${currentYear}`;

    // displaying days in li tag
    daysTag.innerHTML = liTag;
};

getCalendar();

preNxtBtn.forEach((btn) => {
    btn.addEventListener("click",() => {
        currentMonth = btn.id === "prev" ? currentMonth-1 : currentMonth + 1;

        if(currentMonth<0 || currentMonth>11){
            date = new Date(currentYear, currentMonth, new Date().getDate());

            currentYear = date.getFullYear();

            currentMonth = date.getMonth();
        }

        getCalendar();
    })
})