window.onload = () => {
    const timeline = document.querySelector("#timeline");
    let chosenPeriod_id = 0;
    let circles = document.querySelectorAll(".circle");
    let circlesArray = Array.prototype.slice.call(circles);
    let dates = document.querySelectorAll(".date");
    let datesArray = Array.prototype.slice.call(dates);
    let period_elements = document.querySelectorAll(".period-element");
    let periodElementsArray = Array.prototype.slice.call(period_elements);
    let asideRightArrow = document.querySelectorAll(".aside")[1];
    let overlay_content = document.querySelector('.overlay-content');

    // function chosenDate() {
    //     datesArray.forEach(el => {
    //         el.classList.remove('chosen-date')
    //     });

    //     el.classList.add('chosen-date')
    // }

    // function chosenCircle() {
    //     circlesArray.forEach(el => {
    //         el.classList.remove('chosen-circle')
    //     });
    //     console.log(el);
    //     console.log(chosenPeriod_id);
    //
    //     el.classList.add('chosen-circle')

    // }

    function chosenID() {
        if (overlay_content.classList.contains('none')) {
            document.querySelector('.overlay-bg').classList.remove('none');
            document.querySelector('.overlay-img').classList.remove('none');
            overlay_content.classList.remove('none');
        }
        circlesArray.forEach((el) => {
            el.classList.remove("chosen-circle");
        });
        datesArray.forEach((el) => {
            el.classList.remove("chosen-date");
        });
        let chosens = document.querySelectorAll(
            `[data-id="${chosenPeriod_id}"]`
        );
        chosens[0].classList.add("chosen-date");
        chosens[0].classList.add("chosen-period-element");
        chosens[2].classList.add("chosen-circle");
    }

    circlesArray.forEach((el, index) => {
        el.dataset.id = index;
        el.addEventListener("click", () => {
            chosenPeriod_id = index;
            chosenID();
        });
    });
    datesArray.forEach((el, index) => {
        el.dataset.id = index;
        el.addEventListener("click", () => {
            chosenPeriod_id = index;
            chosenID();
        });
    });
    periodElementsArray.forEach((el, index) => {
        el.dataset.id = index;
        el.addEventListener("click", () => {
            chosenPeriod_id = index;
            chosenID();
        });
    });
    asideRightArrow.addEventListener("click", () => {
        if (chosenPeriod_id < 4) {
            chosenPeriod_id++;
            chosenID();
        }
    });
};
