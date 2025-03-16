document.getElementById('saveData').addEventListener('click', function() {
    const formData = {
        income: document.getElementById('income'),
        expenses: document.getElementById('expenses'),
        loanAmount: document.getElementById('loanAmount'),
        loanInterest: document.getElementById('loanInterest'),
        loanTerm: document.getElementById('loanTerm'),
        depositAmount: document.getElementById('depositAmount'),
        depositInterest: document.getElementById('depositInterest'),
        debts: document.getElementById('debts'),
        savings: document.getElementById('savings')
    };

    let isValid = true;

    function validateField(field) {
        const value = field.value;
        if (isNaN(value) || parseFloat(value) < 0) {
            field.classList.remove('valid'); // Remove valid class
            field.classList.add('error');
            isValid = false;
        } else {
            field.classList.remove('error'); // Remove error class
            field.classList.add('valid'); // Add valid class
        }
    }

    for (const key in formData) {
        validateField(formData[key]);
    }

    if (isValid) {
        const data = {};
        for (const key in formData) {
            data[key] = formData[key].value;
        }

        console.log('Collected Data:', data);
        document.getElementById('dataMessage').textContent = 'Данные сохранены (только в консоли - для демонстрации).';
    } else {
        document.getElementById('dataMessage').textContent = 'Пожалуйста, введите положительные числа во все поля.';
    }

});
