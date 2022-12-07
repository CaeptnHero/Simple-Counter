// set initial count
let count = 0;

// select value and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        // what button ist typed
        // console.log(e.currentTarget.);

        // what class list by click
        // console.log(e.currentTarget.classList);

        // Decrease by buttonclick
        const styles = e.currentTarget.classList;
        if (styles.contains('decrease')) {
            count--;
        }
        else if (styles.contains('increase')) {
            count++;
        }
        else {
            count = 0;
        }
        value.textContent = count;
    })
});
