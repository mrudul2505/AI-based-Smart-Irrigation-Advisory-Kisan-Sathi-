/* Farmer registration validation using the bundled jQuery library. */
jQuery(function ($) {
    const $form = $('#registration-form');
    if (!$form.length) return;

    const $success = $form.find('#form-success');
    const $date = $form.find('#date');
    const cropStages = ['germination', 'tillering', 'grand-growth', 'maturity'];
    const soilTypes = ['black-cotton', 'red-laterite', 'alluvial', 'sandy', 'clay'];
    const irrigationMethods = ['drip', 'furrow', 'sprinkler', 'flood'];

    // Use the farmer's local calendar date instead of a UTC ISO timestamp.
    function today() {
        const now = new Date();
        return [now.getFullYear(), String(now.getMonth() + 1).padStart(2, '0'),
            String(now.getDate()).padStart(2, '0')].join('-');
    }

    $date.attr('max', today());
    $form.find('input[name="irrigation"]').attr('aria-describedby', 'irrigation-error');

    const rules = {
        name: value => {
            if (!value) return 'Name is required.';
            if (!/^[A-Za-z ]+$/.test(value)) return 'Enter a name using letters and spaces only.';
            return '';
        },
        mobile: value => {
            if (!value) return 'Mobile number is required.';
            if (!/^[6-9]\d{9}$/.test(value)) return 'Enter a valid 10-digit Indian mobile number.';
            return '';
        },
        email: value => {
            if (!value) return 'Email address is required.';
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Enter a valid email address.';
            return '';
        },
        village: value => value ? '' : 'Village is required.',
        plotid: value => {
            if (!value) return 'Plot ID is required.';
            if (!/^PLOT-[A-Z0-9]+$/.test(value)) return 'Enter a Plot ID such as PLOT-A or PLOT-12.';
            return '';
        },
        cropstage: value => cropStages.includes(value) ? '' : 'Select a crop stage.',
        soiltype: value => soilTypes.includes(value) ? '' : 'Select a soil type.',
        irrigation: value => irrigationMethods.includes(value) ? '' : 'Choose an irrigation method.',
        moisture: value => {
            if (!value) return 'Soil moisture is required.';
            const amount = Number(value);
            if (!Number.isFinite(amount) || amount < 0 || amount > 100) {
                return 'Enter soil moisture between 0 and 100.';
            }
            return '';
        },
        date: value => {
            if (!value) return 'Date is required.';
            if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return 'Enter a valid registration date.';
            const [year, month, day] = value.split('-').map(Number);
            const selected = new Date(year, month - 1, day);
            if (selected.getFullYear() !== year || selected.getMonth() !== month - 1 || selected.getDate() !== day) {
                return 'Enter a valid registration date.';
            }
            if (value > today()) return 'Registration date cannot be in the future.';
            return '';
        }
    };

    function setFieldState(id) {
        const $targets = id === 'irrigation'
            ? $form.find('input[name="irrigation"]')
            : $form.find('#' + id);
        const value = id === 'irrigation'
            ? $targets.filter(':checked').val()
            : $targets.val();
        const message = rules[id](String(value ?? '').trim());
        $targets.toggleClass('is-invalid', Boolean(message))
            .attr('aria-invalid', String(Boolean(message)));
        $form.find('#' + id + '-error').text(message);
        return message === '';
    }

    $form.on('input change', 'input, select', function () {
        $success.prop('hidden', true).text('');
        const id = this.name === 'irrigation' ? 'irrigation' : this.id;
        if (Object.prototype.hasOwnProperty.call(rules, id)) setFieldState(id);
    });

    $form.on('submit', function (event) {
        event.preventDefault();
        $date.attr('max', today());
        // Run every rule before combining results so every invalid field is shown.
        const results = Object.keys(rules).map(setFieldState);
        const valid = results.every(Boolean);
        $success.prop('hidden', !valid).text(valid
            ? 'Registration details are valid. Farmer registration is ready to be submitted.'
            : '');
        if (!valid) $form.find('.is-invalid').first().trigger('focus');
    });

    $form.on('reset', function () {
        $form.find('.field-error').text('');
        $form.find('[aria-invalid]').removeClass('is-invalid').removeAttr('aria-invalid');
        $success.prop('hidden', true).text('');
        $date.attr('max', today());
    });
});
