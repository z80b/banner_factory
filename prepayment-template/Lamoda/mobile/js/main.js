;(function(){
    var transactionInProgress = false,
        validated = false,
        i,
        view = {},
        errorMessages = {
            'default': 'К сожалению, на текущий момент мы не можем принять данную карту. Попробуйте оплатить другой',
            'AMOUNT_EXCEED': 'К сожалению, на текущий момент мы не можем принять данную карту. Cвяжитесь со своим банком и попробуйте еще раз, либо воспользуйтесь другой картой',
            'AUTHENTICATION_ERROR': 'К сожалению, на текущий момент мы не можем принять данную карту. Cвяжитесь со своим банком и попробуйте еще раз, либо воспользуйтесь другой картой',
            'AUTHORIZATION_TIMEOUT': 'К сожалению, на текущий момент мы не можем принять данную карту. Cвяжитесь со своим банком и попробуйте еще раз, либо воспользуйтесь другой картой',
            'COMMUNICATE_ERROR': 'Ошибка возникла при передаче данных в МПС. Повторите попытку',
            'DUPLICATE_ORDER_ID': 'Номер заказа уже использовался ранее. Оформите новый заказ',
            'FRAUD_ERROR': 'К сожалению, на текущий момент мы не можем принять данную карту. Попробуйте оплатить другой',
            'FRAUD_ERROR_CRITICAL_CARD': 'К сожалению, на текущий момент мы не можем принять данную карту. Попробуйте оплатить другой',
            'ILLEGAL_ORDER_STATE': 'К сожалению, на текущий момент мы не можем принять данную карту. Попробуйте оплатить другой',
            'ISSUER_BLOCKED_CARD': 'К сожалению, на текущий момент мы не можем принять данную карту. Cвяжитесь со своим банком и попробуйте еще раз, либо воспользуйтесь другой картой',
            'ISSUER_CARD_FAIL': 'К сожалению, на текущий момент мы не можем принять данную карту. Cвяжитесь со своим банком и попробуйте еще раз, либо воспользуйтесь другой картой',
            'ISSUER_FAIL': 'К сожалению, на текущий момент мы не можем принять данную карту. Cвяжитесь со своим банком и попробуйте еще раз, либо воспользуйтесь другой картой',
            'ISSUER_LIMIT_AMOUNT_FAIL': 'Предпринята попытка выполнить транзакцию на сумму, превышающую (дневной) лимит, заданный банком-эмитентом. Измените лимит и повторите попытку',
            'ISSUER_LIMIT_COUNT_FAIL': 'Превышен лимит на число транзакций. Измените лимит и повторите попытку',
            'ISSUER_LIMIT_FAIL': 'Предпринята попытка, превышающая ограничения банка-эмитента на сумму или количество операций в определенный промежуток времени. Измените ограничения и повторите попытку',
            'ISSUER_TIMEOUT': 'Нет связи с банком эмитентом. Повторите попытку',
            'MERCHANT_RESTRICTION': 'К сожалению, на текущий момент мы не можем принять данную карту. Попробуйте оплатить другой',
            'PROCESSING_ERROR': 'В данный момент сервис оплаты недоступен. Повторите попытку',
            'LIMIT_EXCHAUST': 'Время, отведенное для ввода данных, исчерпано. Оформите новый заказ',
            'ORDER_TIME_OUT': 'Время платежа (сессии) истекло. Оформите новый заказ',
            'WRONG_CARD_PAN': 'Неверный номер карты. Повторите ввод данных',
            'WRONG_CARD_INFO': 'Неверные параметры карты. Повторите ввод данных',
            'WRONG_PARAMS': 'Неверные параметры. Повторите ввод данных'
        };

    view.commonErrorBlock = document.getElementById('payture-title-error');
    view.payture = document.getElementById('payture');
    view.numInp = document.getElementById('card_num');
    view.yearSel = document.getElementById('card_valid_year');
    view.bigtext = document.getElementById('bigtext');
    view.monthSel = document.getElementById('card_valid_month');
    view.cvcInp = document.getElementById('cvc_input');
    view.submitBtn = document.getElementById('payture-btn');
    view.cancelBtn = document.getElementById('payture-cantsubmit');
    view.submitLoader = document.getElementById('b-loader');
    view.buttonAnimationPos = 0;
    view.buttonAnimationTimeoutID;
    ios = /ip(hone|od|ad)/i.test(navigator.userAgent);

    view.submitBtn.className = 'in_disabled';
    view.cancelBtn.className = 'in_disabled';

    // if the hash value
    if ("onhashchange" in window) {
        window.onhashchange = locationHashChanged;
        if (window.location.hash) locationHashChanged();
    }

    $("#card_num").mask("9999   9999   9999   9999   ?999");
    view.cvcInp.type = 'password';


    var binsWComission = [404170,406660,419313,419316,428337,431436,431437,482415,487424,524729,510117,512647,516048,516059,516089,516750,516754,516755,516756,516758,516761,516769,516782,516791,516792,516824,516845,516863,516864,516865,516866,516899,517944,518280,518623,521513,521514,530186,530359,532197,533686,533731,535118,536502,537003,538814,539715,540892,540953,541271,541733,542171,542521,543973,544187,544362,544847,545219,548343,548919,549385,549820,552154,552611,552709,554956,557088,557089,557814,557815,557825,557826,558327,558376,558381,670604,670642,670820,670832,670850,676271,676612,676645,676700,676872,677083,677210,677701,545264,531965,530778,523406,516781,549022,516780,527410,510477,670635,457636,479094,479096,452437,457639,479072,457635,479070,479082,516749,471362,410336,436323,479751,406758,410337,416954,406760,406788,406759,547266,510094,676566,533194,516887,510093,528534,531694,519736,677716,525684,544379,516837,516836,473838,437435,437518,452435,424492,424491,424490,452434,511695,516799,407360,407361,407362,407363,407364,407365,407368,417232,434343,516930,522871,523648,529578,533037,535128,557099,557100,558259,535129,516800,444424,477714061,422605,410243,410244,410245,410246,410247,516800,544179,5441,543259,544179,544904,670516,670516,670516,536364,516799125,516799125,516799,516799,516799225,516799225,516799,516799,516799325,516799325,516799,516799,51680012,51680012,516800,516800,51680022,51680022,516800,516800,51680032,51680032,516800,516800,53636412,536364,53636422,536364,53636432,536364,54325912,543259,54325922,543259,54325932,543259,54417912,544179,54417922,544179,54417932,544179,54490412,544904,54490422,544904,54490432,544904,547994,530565,53056512,530565,53056522,530565,53056532,530565,446670,410242,535196,535196,535196125,535196125,535196,535196,535196225,535196225,535196,535196,535196325,535196325,535196,535196,404857,413051,423396,424600,458121,414939,414943,440509,462705,404856,404860,417649,432575,404859,414961,473118,473121,414949,414962,424657,440535,473117,404858,462708,476065,434156,440588,440129,476339,414960,458122];

    view.numInp.onkeyup = function()
    {
        var isBankWComission = false;
        var lFullNumber = view.numInp.value.replace(" ","");
        for(var k = 0; k < binsWComission.length; k++)
        {
            if(lFullNumber.indexOf(binsWComission[k]) == 0)
            {
                isBankWComission = true;
            }
        }
         $('.bank-comission').toggle(isBankWComission);
    }


    view.monthSel.onkeyup = function(){
        if (validateEMonth(this)) {
            return;
        } else{
            if (this.value.length < 1) {
                view.bigtext.style.color = '#a9a9a9';
                if (ios) return false;
                view.numInp.focus();
            };

            if (this.value.length == 2) {
                view.bigtext.style.color = '#333';
                
                view.yearSel.focus();
            }
        };
    }

    view.yearSel.onkeyup = function(){
        if (validateEYear(this)) {
            return;
        } else{
            if (this.value.length < 1) {
                view.monthSel.focus();
            };

            if (this.value.length == 2) {
                view.cvcInp.focus();
            }
        };
    }

    view.cvcInp.onkeyup = function(){
        var error = $('.field_block_error').length;
        if (validateInputError(this)) {
            return;
        } else {
             if ( view.numInp.value.length && !error) {
                /* Валидация даты выпуска карты */
                if ( view.monthSel.value.length == 2 && view.yearSel.value.length == 2 && !error) {
                    /* Валидация СVC карты */
                    if (view.cvcInp.value.length == 3 && !error) {
                        view.cvcInp.type = 'password'
                        view.submitBtn.className = view.submitBtn.className.replace( /(?:^|\s)in_disabled(?!\S)/ , '' );
                        view.cancelBtn.className = view.cancelBtn.className.replace( /(?:^|\s)in_disabled(?!\S)/ , '' );
                    } else {
                        view.submitBtn.className = 'in_disabled';
                        view.cancelBtn.className = 'in_disabled';
                    }
                } else {
                    view.submitBtn.className = 'in_disabled';
                    view.cancelBtn.className = 'in_disabled';
                }
            } else {
                view.submitBtn.className = 'in_disabled';
                view.cancelBtn.className = 'in_disabled';
            }
            return true;
        };
    }

    /* Валидация по клику */
    view.submitBtn.onclick = function(){

        /* Если не прошли валидацию */
        if (view.submitBtn.className.match(/in_disabled/)) {
            return;
        };

        if (transactionInProgress) return;

        if ($('.field_block_error').length) {
            /* Если не прошли валидацию */
            if (view.submitBtn.className.match(/in_disabled/)) {
                return;
            };
        } else{
            view.submitBtn.className = view.submitBtn.className.replace( /(?:^|\s)in_disabled(?!\S)/ , '' );
            transactionInProgress = true;
            view.submitBtn.className = 'in_progress';
            view.commonErrorBlock.style.display = 'none';
            startButtonAnimation();
            numInpVal = view.numInp.value.replace(/\s+/g, '');

            formSubmit(
                'OrderId=' + document.getElementById('order_id').value +
                ';Amount=' + document.getElementById('amount').value +
                ';Key=' + document.getElementById('key').value +
                ';CardNumber=' + numInpVal +
                ';CardHolder=card holder' +
                ';EMonth=' + view.monthSel.value +
                ';EYear=' + view.yearSel.value +
                ';SecureCode=' + view.cvcInp.value +
                ';TemplateTag=json'
            , paySuccess, payError);
        };
    };

    function formSubmit(cartData, successCallback, errorCallback) {
        $.ajax({
            type: 'POST',
            url: '/apim/PaySubmit', 
            data: {
                Data: cartData,
                Json: true
            },
            timeout: 30000,
            success: function(response) {
                if (response.ACSUrl) {
                    Submit3DS(response.ACSUrl, response.TermUrl, response.ThreeDSKey, response.PaReq);
                    return false;
                }
                if (response.ErrCode == 'NONE') {
                    successCallback(response.RedirectUrl);
                } else {
                    document.getElementById('key').value = response.Key;
                    errorCallback(response.ErrCode, response.CanRetry, response.RedirectUrl);
                    view.commonErrorBlock.style.display = 'block';
                }
                transactionInProgress = false;
                view.submitBtn.className = '';
                clearTimeout(view.buttonAnimationTimeoutID);
            },
            error: function() {
                view.commonErrorBlock.innerHTML = errorMessages['default'];
                view.commonErrorBlock.style.display = 'block';
                transactionInProgress = false;
                view.submitBtn.className = '';
                clearTimeout(view.buttonAnimationTimeoutID);
            }
        });
    }

    function paySuccess(url) {
        window.location = url;
    }

    function payError(code, canRetry, url) {
        if (!canRetry) {
            window.location = url;
            return;
        }
        if (errorMessages[code]) {
            view.commonErrorBlock.innerHTML = errorMessages[code];
            view.commonErrorBlock.style.display = 'block';
        } else {
            view.commonErrorBlock.innerHTML = errorMessages['default'];
            view.commonErrorBlock.style.display = 'block';
        }
    }

    function Submit3DS (acsUrl, termUrl, md, paReq) {
        var form = $("<form name='form' action='" + acsUrl + "' method='post'>" +
                "<input type='hidden' name='TermUrl' value='" + termUrl + "'>" +
                "<input type='hidden' name='MD' value='" + md + "'>" +
                "<input type='hidden' name='PaReq' value='" + paReq + "'>" +
            "</form>").appendTo($("body"));
        form.submit();
    }

    function startButtonAnimation() {
        view.buttonAnimationTimeoutID = setTimeout(function(){
            view.buttonAnimationPos++;
            if (view.buttonAnimationPos > 31) view.buttonAnimationPos = 1;
            view.submitLoader.style.backgroundPosition = view.buttonAnimationPos + 'px 0';
            setTimeout(arguments.callee,50);
        },50);
    }

    function validateInputError (el) {
        var $block = $(el).parent();

        el.value.replace(/\s+/g, '');

        if (/[^0-9]/.test(el.value)) {
            view.submitBtn.className = 'in_disabled';
            $block.addClass('field_block_error');
            return true;
        } else {
            $block.removeClass('field_block_error');
            return false;
        }
    }


    function validateEMonth(el){
        var $block = $(el).parent();

        el.value.replace(/\s+/g, '');

        if (!(/0[1-9]|1[0-2]/.test(el.value))) {
            view.submitBtn.className = 'in_disabled';
            $block.addClass('field_block_error');
            return true;
        } else {
            $block.removeClass('field_block_error');
            return false;
        }
    }


    function validateEYear(el){
        var $block = $(el).parent();

        el.value.replace(/\s+/g, '');

        if (!(/1[6-9]|[2-9][0-9]/.test(el.value))) {
            view.submitBtn.className = 'in_disabled';
            $block.addClass('field_block_error');
            return true;
        } else {
            $block.removeClass('field_block_error');
            return false;
        }
    }

    function locationHashChanged () {
        var url = {};

        $.each(window.location.hash.replace('#', '').split('&'), function( index, item ) {
            var param = item.split('='),
                paramName = param[0],
                value;

            try {
                value = decodeURIComponent( param[1].replace(/\+/g, '%20') );
                value = param[1] > 0 ? value.length == 1 ? '0' + value : value :''; // Если пришел 0 = '', или значение длиною 1, подставляем 0 к значению 03.
            } catch(e) {
                value = '';
                console.log(e);
            }

            url[paramName] = value;
        });

        view.numInp.value = url['cardNumber'] ? url['cardNumber'] : '';
        view.monthSel.value = url['expiryMonth'] ? url['expiryMonth'] : '';
        view.yearSel.value = url['expiryYear'] ? url['expiryYear'].length === 4 ? url['expiryYear'].toString().substr(2,2) : url['expiryYear'] : '';

        // show keyboard
        if (!view.numInp.value) {showKeyboard(view.numInp); return false;}
        if (!view.monthSel.value) {showKeyboard(view.monthSel); return false;}
        if (!view.yearSel.value) {showKeyboard(view.yearSel); return false;}
        view.cvcInp.focus();
        url = {};
    }

    function showKeyboard(el) {
        el.focus();
    }
})();
