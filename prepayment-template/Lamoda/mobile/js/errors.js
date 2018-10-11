var errors = {
   	'RU':
		{'default':'К сожалению, в настоящее время платеж с данной карты невозможен. Попробуйте оплатить другой картой',
        ACCESS_DENIED:'Запрещены операции с данным набором параметров для терминала',
        AMOUNT_ERROR:'Ошибка суммы операции. Превышена сумма либо сумма операции не проверена в биллинге',
        AMOUNT_EXCEED:'Сумма транзакции превышает доступный остаток средств на выбранном счете',
        API_NOT_ALLOWED:'Запрет использования API с данного IP проверьте реквизиты доступа',
        CARD_EXPIRED:'Истек срок действия карты',
        CARD_NOT_FOUND:'Не найдена карта по данному идентификатору',
        COMMUNICATE_ERROR:'Ошибка связи в физических каналах',
        CURRENCY_NOT_ALLOWED:'Валюта не разрешена для предприятия',
        CUSTOMER_NOT_FOUND:'Пользователь не найден',
        DUPLICATE_CARD:'Карта уже существует',
        DUPLICATE_ORDER_ID:'Заказ существует в Payture с данным идентификатором',
        DUPLICATE_PROCESSING_ORDER_ID:'Заказ существует в процессинге с данным идентификатором',
        DUPLICATE_USER:'Пользователь уже существует',
        EMAIL_ERROR:'Ошибка при обработке сообщения электронной почты ошибка отправки сообщения',
        EMPTY_RESPONSE:'Пустой ответ',	
        FRAUD_ERROR:'Ошибка связанная с мошенничеством',
        FRAUD_ERROR_BIN_LIMIT:'Превышение оплат с 1 банка',
        FRAUD_ERROR_BLACKLIST_AEROPORT:'Аэропорт в черном списке мошеннических',
        FRAUD_ERROR_BLACKLIST_BANKCOUNTRY:'Страна банка в черном списке мошеннических',
        FRAUD_ERROR_BLACKLIST_USERCOUNTRY:'Страна пользователя в черном списке мошеннических',
        FRAUD_ERROR_CRITICAL_CARD:'Карта помечена как мошенническая',
        FRAUD_ERROR_CRITICAL_CUSTOMER:'Пользователь помечен как мошенник',
        FRAUD_ERROR_IP:'IP помечен как мошеннический',
        FRAUD_INTERNAL_ERROR:'Ошибка антифрод фильтра при обработке транзакции',
        ILLEGAL_ORDER_STATE:'Неверное состояние заказа',
        INTERNAL_ERROR:'Внутренняя ошибка шлюза',
        INVALID_PAYTUREID:'Неверный fingerprint устройства',
        INVALID_SIGNATURE:'Неверная подпись запроса',
        ISSUER_BLOCKED_CARD:'Карта заблокирована у эмитента',
        ISSUER_CARD_FAIL:'Эмитент не смог разрешить списание средств с карты',
        ISSUER_FAIL:'Эмитент не ответил на запрос',
        ISSUER_LIMIT_AMOUNT_FAIL:'Превышение лимитов на сумму у эмитента',
        ISSUER_LIMIT_COUNT_FAIL:'Превышение лимитов на количество операций у эмитента',
        ISSUER_LIMIT_FAIL:'Превышение лимитов у эмитента(без расшифровки)',
        ISSUER_TIMEOUT:'Эмитент не ответил в установленное время',
        MERCHANT_FORWARD:'Перенаправление на другой терминал',
        MERCHANT_RESTRICTION:'Запрет МПС или экваера на проведение операции мерчанту',
        MPI_CERTIFICATE_ERROR:'Ошибка сервиса MPI(шлюз)',
        MPI_RESPONSE_ERROR:'Ошибка сервиса MPI(МПС)',
        ORDER_NOT_FOUND:'Заказ не найден',
        ORDER_TIME_OUT:'Заказ просрочен',
        PAYMENT_ENGINE_ERROR:'Ошибка взаимодействия в ядре процессинга',
        PROCESSING_ACCESS_DENIED:'Доступ к процессингу запрещен',
        PROCESSING_ERROR:'Ошибка при процессинге платежа',
        PROCESSING_FRAUD_ERROR:'Процессинг отклонил мошенническую транзакцию',
        PROCESSING_TIME_OUT:'Не получен ответ от процессинга в установленное время',
        REFUSAL_BY_GATE:'Операция отклонена шлюзом',
        THREE_DS_ATTEMPTS_FAIL:'Попытка 3DS авторизации неудачна',
        THREE_DS_AUTH_ERROR:'Ошибка авторизации 3DS',
        THREE_DS_ERROR:'Ошибка оплаты 3DS',
        THREE_DS_FAIL:'Ошибка сервиса 3DS',
        THREE_DS_NOT_ATTEMPTED:'3DS не вводился',
        THREE_DS_NOTENROLLED:'Карта не вовлечена в систему 3DS',
        THREE_DS_TIME_OUT:'Превышено время ожидания 3DS',
        THREE_DS_USER_AUTH_FAIL:'Пользователь ввел неверный код 3DS',
        UNKNOWN_STATE:'Неизвестный статус транзакции',
        USER_NOT_FOUND:'Пользователь не найден',
        WRONG_AUTHORIZATION_CODE:'Неверный код авторизации',
        WRONG_CARD_INFO:'Неверная информация на карте',
        WRONG_CARDHOLDER:'Недопустимый кардхолдер',
        WRONG_CONFIRM_CODE:'Недопустимый код подтверждения',
        WRONG_CVV:'Недопустимый CVV',
        WRONG_EXPIRE_DATE:'Неправильная дата окончания срока действия',
        WRONG_PAN:'Неверный номер нарты',
        WRONG_PARAMS:'Неверные параметры',
        WRONG_PAY_INFO:'Неверные карточные данные в шлюзе',
        WRONG_PHONE:'Неверный телефон',
        WRONG_USER_PARAMS:'Неверные параметры пользователя',
        OTHER_ERROR:'Ошибка которая произошла при невозможном стечении обстоятельств',
		AMOUNT_EXCEED_BALANCE  : 'К сожалению, в настоящее время платеж с данной карты невозможен. Пожалуйста, свяжитесь со своим банком и попробуйте еще раз, либо воспользуйтесь другой картой',       
		AUTHENTICATION_ERROR  : 'К сожалению, в настоящее время платеж с данной карты невозможен. Пожалуйста, свяжитесь со своим банком и попробуйте еще раз, либо воспользуйтесь другой картой',       
		AUTHORIZATION_TIMEOUT  : 'К сожалению, в настоящее время платеж с данной карты невозможен. Пожалуйста, свяжитесь со своим банком и попробуйте еще раз, либо воспользуйтесь другой картой',       
		LIMIT_EXCHAUST  : 'Время, отведенное для ввода данных, исчерпано. Пожалуйста, оформите новый заказ',      
		WRONG_CARD_PAN  : 'Неверный номер карты. Пожалуйста, повторите ввод данных', 
	},
	'EN':{
		'default':'Sorry, currently the payment with the card is impossible. Try another card',
		ACCESS_DENIED:'Prohibited transactions with the given set of parameters for the terminal',
		AMOUNT_ERROR:'Error-transaction amount. The amount or the transaction amount is not checked in the billing',
		AMOUNT_EXCEED:'Transaction Amount exceeds the available balance on the selected account',
		API_NOT_ALLOWED:'The ban on the use of the API with the IP check login credentials',
		CARD_EXPIRED:'Expired card',
		CARD_NOT_FOUND:'Card not found for this ID',
		COMMUNICATE_ERROR:'Communication failure in the physical channels',
		CURRENCY_NOT_ALLOWED:'Currency is not allowed for enterprise',
		CUSTOMER_NOT_FOUND:'User not found',
		DUPLICATE_CARD:'Card already exists',
		DUPLICATE_ORDER_ID:'Order exists in Payture with the given ID',
		DUPLICATE_PROCESSING_ORDER_ID:'Order is in processing with the given ID',
		DUPLICATE_USER:'User already exists',
		EMAIL_ERROR:'Error occurred while processing the email message error sending message',
		EMPTY_RESPONSE:'Empty response', 
		FRAUD_ERROR:'Error-related fraud',
		FRAUD_ERROR_BIN_LIMIT:'Excess payment with the Bank 1',
		FRAUD_ERROR_BLACKLIST_AEROPORT:'Airport in the black list of fraudulent',
		FRAUD_ERROR_BLACKLIST_BANKCOUNTRY:'Country of the Bank in the black list of fraudulent',
		FRAUD_ERROR_BLACKLIST_USERCOUNTRY:'Country of the user in the black list of fraudulent',
		FRAUD_ERROR_CRITICAL_CARD:'Card is flagged as fraudulent',
		FRAUD_ERROR_CRITICAL_CUSTOMER:'User marked as a scammer',
		FRAUD_ERROR_IP:'IP labeled as fraudulent',
		FRAUD_INTERNAL_ERROR:'Error antifraud filter when processing the transaction',
		ILLEGAL_ORDER_STATE:'Incorrect order status',
		INTERNAL_ERROR:'Internal error gateway',
		INVALID_PAYTUREID:'Invalid fingerprint device',
		INVALID_SIGNATURE:'Invalid request signature',
		ISSUER_BLOCKED_CARD:'Card Issuer',
		ISSUER_CARD_FAIL:'Issues failed to resolve the debit card',
		ISSUER_FAIL:'Issuer did not answer the request',
		ISSUER_LIMIT_AMOUNT_FAIL:'Limit amount from the Issuer',
		ISSUER_LIMIT_COUNT_FAIL:'Limit the number of operations of the Issuer',
		ISSUER_LIMIT_FAIL:'Limits of the Issuer(without decoding)',
		ISSUER_TIMEOUT:'Issuer has not replied within the set time',
		MERCHANT_FORWARD:'Redirect to another terminal',
		MERCHANT_RESTRICTION:'Ban, MPs or Aquaero for the operation merchant',
		MPI_CERTIFICATE_ERROR:'Error MPI(gateway)',
		MPI_RESPONSE_ERROR:'Error MPI(MEAs)',
		ORDER_NOT_FOUND:'Order not found',
		ORDER_TIME_OUT:'Order expired',
		PAYMENT_ENGINE_ERROR:'Error interaction-processing',
		PROCESSING_ACCESS_DENIED:'Access forbidden processing',
		PROCESSING_ERROR: 'Error when processing payment',
		PROCESSING_FRAUD_ERROR:'Processing rejected fraudulent transaction',
		PROCESSING_TIME_OUT:'No response is received from the processing in set time',
		REFUSAL_BY_GATE:'Operation is rejected by gateway',
		THREE_DS_ATTEMPTS_FAIL:'Attempt 3DS authorization failed',
		THREE_DS_AUTH_ERROR:'Authorization Error 3DS',
		THREE_DS_ERROR:'Error of payment of the 3DS',
		THREE_DS_FAIL:'Error 3DS',
		THREE_DS_NOT_ATTEMPTED:'3DS is not entered',
		THREE_DS_NOTENROLLED:'Card is not involved in the 3DS',
		THREE_DS_TIME_OUT:'Timed out 3DS',
		THREE_DS_USER_AUTH_FAIL:'User entered an incorrect code 3DS',
		UNKNOWN_STATE:'Unknown transaction status',
		USER_NOT_FOUND: 'User not found',
		WRONG_AUTHORIZATION_CODE:'Invalid authorization code',
		WRONG_CARD_INFO:'Incorrect information on the card',
		WRONG_CARDHOLDER:'Incorrect cardholder',
		WRONG_CONFIRM_CODE:'Invalid confirmation code',
		WRONG_CVV:'Invalid CVV',
		WRONG_EXPIRE_DATE:'Incorrect date of expiry',
		WRONG_PAN:'Wrong number sled',
		WRONG_PARAMS:'Incorrect parameters',
		WRONG_PAY_INFO:'Invalid card data at the gateway',
		WRONG_PHONE:'Invalid phone',
		WRONG_USER_PARAMS:'Invalid user',
		OTHER_ERROR:'Error occurred in impossible circumstances',
		AMOUNT_EXCEED_BALANCE : 'Unfortunately, at present, the payment from the card is impossible. Please contact your Bank and try again, or use another card', 
		AUTHENTICATION_ERROR : 'Unfortunately, at present, the payment from the card is impossible. Please contact your Bank and try again, or use another card', 
		AUTHORIZATION_TIMEOUT : 'Unfortunately, at present, the payment from the card is impossible. Please contact your Bank and try again, or use another card', 
		LIMIT_EXCHAUST : 'Time allocated for input data is exhausted. Please place a new order', 
		WRONG_CARD_PAN : 'Invalid card number. Please repeat input', 
	}			
};

var answers = {
	'RU':{PAY_SUCCESS_TITLE:"Оплата прошла успешно!",
		PAY_ERROR_TITLE:"Оплата не прошла!",
		REDIRECT_TEXT:"Через несколько секунд вы&nbsp;будете перемещены на&nbsp;страницу магазина или&nbsp;нажмите <a href=''>сюда</a> чтобы перейти без&nbsp;ожидания", 
		ADD_SUCCESS_TITLE:"Карта успешно привязана!",
		ADD_ERROR_TITLE:"Карта не привязана!"},
	'EN':{PAY_SUCCESS_TITLE:"The payment is successful!",
		PAY_ERROR_TITLE:"The payment is unsuccessful!",
		REDIRECT_TEXT:"Please wait a few seconds OR press <a href=''>here</a>", 
		ADD_SUCCESS_TITLE:"This card is successfully added to your  account!",
		ADD_ERROR_TITLE:"Sorry, this card was not added to your  account!"}
};

var templateText = {
	'RU':{
		CARDHOLDER:"ДЕРЖАТЕЛЬ КАРТЫ",
		CARDNUMBER:"НОМЕР КАРТЫ",
		CARDHOLDERP:"IVAN IVANOV",
		CARDNUMBERP:"4242 4242 4242 4242",
		CARDNUMBERP_AMEX:"3434 343434 34343",
		UNDERCVV:"Последние три цифры на обратной стороне",
		UNDERCVVAMEX:"Последние цифры на обратной стороне",
		MONTH:"МЕСЯЦ",
		MONTHP:"ММ",
		YEAR:"ГОД",
		YEARP:"ГГ",
		PHONE:"Номер телефона",
		VALID:"VALID<br>THRU",	
		ADDCARD:"Привязать",
		DELETECARD:"Удалить карту",
		PAYCARD:"Оплатить",
		ADDCHECKBOX:' Запомнить карту',
		DELETEALERT:"Вы действительно хотите удалить карту",
		ERRORALERT:"Произошла ошибка",
		SELECTCARD:"Выберите карту",
		DEFAULTCARD:"другая",
		NEEDEDFIELDS:"Все поля обязательны для заполнения",
		SECURITYTEXT:"Безопасность платежей гарантируется использованием<br>TLS v1.2 протокола для передачи конфиденциальной информации.",
		PAYMENTDESCRIPTION:"Покупка {product} на сумму {total} руб.",
		RETURNTEXT:"<br/>Через несколько секунд вы&nbsp;будете перемещены на&nbsp;страницу магазина или&nbsp;нажмите <a href=''>сюда</a> чтобы перейти без ожидания",
		WELCOME:"Введите реквизиты",
		MORE:"Узнать больше"
	},
	'EN':{
		CARDHOLDER:"CARDHOLDER",
		CARDNUMBER:"CARD NUMBER",
		CARDHOLDERP:"IVAN IVANOV",
		CARDNUMBERP:"4242 4242 4242 4242",
		CARDNUMBERP_AMEX:"3434 343434 34343",
		UNDERCVV:"The last three digits on the reverse side",
		UNDERCVVAMEX:"The last digits on the reverse side",
		MONTH:"Month",
		MONTHP:"MM",
		YEAR:"Year",
		YEARP:"YY",
		PHONE:"Phone number",
		VALID:"VALID<br>THRU",	
		ADDCARD:"Add",
		DELETECARD:"Delete this card",
		PAYCARD:"Pay",
		ADDCHECKBOX:' Remember this card',
		DELETEALERT:"Are you sure you want to remove this card",
		ERRORALERT:"An error occurred",
		SELECTCARD:"Select card",
		DEFAULTCARD:"other",
		SECURITYTEXT:"Safety is ensured by using TLS v1.2 for private data transfer",
		NEEDEDFIELDS:"All fields are mandatory",
		PAYMENTDESCRIPTION:"Purchase {product} for the sum {total} rubles",
		RETURNTEXT:"<br/>You will be redirected to the merchant page in a few seconds or click <a href=''>here</a>",
		WELCOME:"Enter card details",
		MORE:"Read more"
	}
};

var templateErrors = {
	'RU':{PanErrors   : "В номере карты допущены ошибки",
	EmptyPan	: "Введите от 16 до 19 знаков номера карты",
	EmptyDate	: "Укажите дату, до которой действительна карта",
	EmptyMonth	: "Укажите месяц, до которого действительна карта",
	EmptyYear	: "Укажите год, до которого действительна карта",
	WrongDate	: "Неверно указана дата",
	WrongEmail : "Неверно указан E-mail",
	WrongPhone : "Неверно указан Телефон",
	WrongFIO : "Неверно заполнено Ф.И.О.",
	EmptyCardHolder : "Укажите имя владельца карты",
	EmptyCVV	: "Укажите код CVV"},
	'EN':{PanErrors   : "Incorrect card number",
	EmptyPan	: "Input from 16 to 19 digits of the card number",
	EmptyDate	: "Select card expiration date",
	EmptyMonth	: "Select card expiration month",
	EmptyYear	: "Select card expiration year",
	WrongDate	: "The date is wrong",
	WrongEmail : "The E-mail is wrong",
	WrongPhone : "The Phone is wrong",
	WrongFIO : "The FIO is wrong",
	EmptyCardHolder : "Select cardholder name",
	EmptyCVV	: "Select CVV"}
};