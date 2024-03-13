document.addEventListener('DOMContentLoaded', () => {
    const keys = document.querySelector('.calculator-keys');
    const display = document.querySelector('.calculator-screen');

    keys.addEventListener('click', e => {
        if (!e.target.matches('button')) return;

        const key = e.target;
        const keyValue = key.value;
        const displayValue = display.value;
        const type = key.dataset.type;

        if (keyValue === 'all-clear') {
            display.value = '';
            return;
        }

        if (type === 'number') {
            if (displayValue === '0') {
                display.value = keyValue;
            } else {
                display.value += keyValue;
            }
        }

        if (type === 'operator') {
            display.value += keyValue;
        }

        if (keyValue === '=') {
            display.value = eval(display.value);
        }
    });
});
