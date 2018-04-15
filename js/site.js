$('.date-end').datetimepicker({
    locale: 'ru',
    format: 'DD MMM YYYY',
    defaultDate: moment($('.date-end').data('value'), 'DD-MM-YYYY').format('DD MMM YYYY'),
    maxDate: moment($('.date-end').data('rdate'), 'DD-MM-YYYY').format('DD MMM YYYY'),
    minDate: $('.date-begin').data('value')
        ? moment($('.date-begin').data('value'), 'DD-MM-YYYY').format('DD MMM YYYY')
        : moment($('.date-end').data('ldate'), 'DD-MM-YYYY').format('DD MMM YYYY'),
    useCurrent: false
}).on('dp.change', function (e) {
    $('.date-begin').data('DateTimePicker').minDate(e.date);
});

$('.date-begin').datetimepicker({
    locale: 'ru',
    format: 'DD MMM YYYY',
    defaultDate: moment($('.date-begin').data('value'), 'DD-MM-YYYY').format('DD MMM YYYY'),
    maxDate: $('.date-end').data('value')
        ? moment($('.date-end').data('value'), 'DD-MM-YYYY').format('DD MMM YYYY')
        : moment($('.date-begin').data('rdate'), 'DD-MM-YYYY').format('DD MMM YYYY'),
    minDate: moment($('.date-begin').data('ldate'), 'DD-MM-YYYY').format('DD MMM YYYY'),
    useCurrent: false
})
.on('dp.change', function (e) {
    $('.date-end').data('DateTimePicker').maxDate(e.date);
});