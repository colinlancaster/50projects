const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    counter.innerText = "0";

    const updateCounter = () => {
        // + casts the result to a Number
        const target = +counter.getAttribute('data-target');
        const c = +counter.innerHTML;

        // Ahhh, controls the speed of the increment effect
        const increment = target / 200;

        if (c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`;
            // Give the timer animation a chance to run
            setTimeout(updateCounter, 1);
        }
    }

    updateCounter();
})