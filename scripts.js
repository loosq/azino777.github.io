var wrapper = $('.body-wrapper');

// var submitForm = function () {
//     wrapper.on('submit', 'form', function (e) {
//         e.preventDefault();
//         console.log($(this).serializeArray());
//     })
// }

var ifFormReady = function () {
    let value = 0;
    wrapper.on('change', '.make-order__form input[type="checkbox"]', function (e) {
        const $this = $(this),
            form = $this.closest('form'),
            item = $this.closest('.make-order__list-item'),
            btn = $('button', form),
            textInput = $('.make-order__list-item--text-input', item);

        //change button
        //console.log($this);
        if ($('input:checked', form).length) {
            btn.removeClass("disabled");
        } else {
            btn.addClass("disabled");
        }

        //change total summ
        if ($this.prop('checked')) {
            $('input', textInput).val('');
            textInput.fadeIn(300);
            value += parseInt($this.val());
        } else {
            textInput.fadeOut(300);
            value -= parseInt($this.val());
        }

        $('.make-order__list-total--value span', form).text(value);
    })
}

var ifContactFormReady = function () {
    var data = {
            name: '',
            phone: '',
            mail: ''
        },
        form = $('.complete-order-form form');

    wrapper.on('keyup', '.complete-order-form-inner input[type="text"]', function (e) {
        const $this = $(this);
        data[$this.prop('name')] = $this.val();
    });

    form.on('submit', function (e) {
        e.preventDefault();
        $(this).serializeArray().forEach(function (item) {
            if ($('input', form).prop('name')) {

            }
        })
    })

    $('.content-action__make-action').click(function() {
        $('html, body').animate({
            scrollTop: $(".make-order").offset().top
        }, 500);
    });
}

$(document).ready(function () {
    // submitForm();
    ifFormReady();
    ifContactFormReady();
});