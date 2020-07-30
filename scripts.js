var wrapper = $('.body-wrapper');

//для блока Заказать справку
var ifFormReady = function () {
    let value = 0;
    wrapper.on('change', '.make-order__form input[type="checkbox"]', function (e) {
        const $this = $(this),
            form = $this.closest('form'),
            item = $this.closest('.make-order__list-item'),
            btn = $('button', form),
            textInput = $('.make-order__list-item--text-input', item);

        //убирает блок с кнопки
        if ($('input:checked', form).length) {
            btn.removeClass("disabled");
        } else {
            btn.addClass("disabled");
        }

        //суммирует выбранные справки
        if ($this.prop('checked')) {
            $('input', textInput).val('');
            textInput.fadeIn(300);
            value += parseInt($this.val());
        } else {
            textInput.fadeOut(300);
            value -= parseInt($this.val());
        }

        // меняет число общей суммы
        $('.make-order__list-total--value span', form).text(value);
    })
}

//форма Оформление заказа
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
        e.preventDefault(e);
        $(this).serializeArray().forEach(function (item) {
            if (item.value === '') {
                $('input[name=' + item.name + ']', form).siblings('.complete-order-form-error').fadeIn(300);
            } else {
                $('input[name=' + item.name + ']', form).siblings('.complete-order-form-error').fadeOut(300);
            }
        })


        console.log(data);
    })
}

$(document).ready(function () {
    //скролл к заказать справку
    $('.content-action__make-action').click(function () {
        $('html, body').animate({
            scrollTop: $(".make-order").offset().top
        }, 500);
    });
    ifFormReady();
    ifContactFormReady();
});