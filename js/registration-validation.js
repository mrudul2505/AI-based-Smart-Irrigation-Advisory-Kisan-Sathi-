document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registration-form');
    const today = new Date().toISOString().split('T')[0];
    const dateInput = document.getElementById('date');

    dateInput.max = today;

    const rules = {
        name: value => {
            const trimmed = value.trim();
            if (!trimmed) return 'Name is required.';
            if (!/^[A-Za-z ]+$/.test(trimmed)) return 'Enter a name using letters and spaces only.';
            return '';
        },
        mobile: value => {
            const trimmed = value.trim();
            if (!trimmed) return 'Mobile number is required.';
            if (!/^[6-9]\d{9}$/.test(trimmed)) return 'Enter a valid 10-digit Indian mobile number.';
            return '';
        },
        email: value => {
            const trimmed = value.trim();
            if (!trimmed) return 'Email address is required.';
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) return 'Enter a valid email address.';
            return '';
        },
        village: value => value.trim() ? '' : 'Village is required.',
        plotid: value => value.trim() ? '' : 'Plot ID is required.',
        cropstage: value => value ? '' : 'Select a crop stage.',
        soiltype: value => value ? '' : 'Select a soil type.',
        irrigation: () => document.querySelector('input[name="irrigation"]:checked') ? '' : 'Choose an irrigation method.',
        moisture: value => value !== '' ? '' : 'Soil moisture is required.',
        date: value => {
            if (!value) return 'Date is required.';
            if (value > today) return 'Registration date cannot be in the future.';
            return '';
        }
    };

    function setFieldState(id) {
        const input = document.getElementById(id);
        const message = rules[id](input ? input.value : '');
        const error = document.getElementById(`${id}-error`);
        const targets = id === 'irrigation'
            ? document.querySelectorAll('input[name="irrigation"]')
            : [input];
        targets.forEach(target => {
            target.classList.toggle('is-invalid', Boolean(message));
            target.setAttribute('aria-invalid', Boolean(message));
        });
        error.textContent = message;
        return !message;
    }

    Object.keys(rules).forEach(id => {
        const input = document.getElementById(id);
        if (input) {
            input.addEventListener('input', () => setFieldState(id));
            input.addEventListener('change', () => setFieldState(id));
        }
    });
    document.querySelectorAll('input[name="irrigation"]').forEach(input => input.addEventListener('change', () => setFieldState('irrigation')));

    form.addEventListener('submit', event => {
        event.preventDefault();
        const valid = Object.keys(rules).every(setFieldState);
        const success = document.getElementById('form-success');
        success.hidden = !valid;
        if (valid) {
            success.textContent = 'Registration details are valid. Farmer registration is ready to be submitted.';
        } else {
            success.hidden = true;
            form.querySelector('.is-invalid')?.focus();
        }
    });

    form.addEventListener('reset', () => {
        window.setTimeout(() => {
            document.querySelectorAll('.field-error').forEach(error => error.textContent = '');
            document.querySelectorAll('.is-invalid').forEach(input => input.classList.remove('is-invalid'));
            document.getElementById('form-success').hidden = true;
        });
    });
});
