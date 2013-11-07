/*! Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW) wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 - v4.0.0-a1-development - 2013-11-07
*/
/*
 * Web Experience Toolkit (WET) / Boîte à outils de l"expérience Web (BOEW)
 * wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 */
/*
----- Russian dictionary (il8n) ---
 */
( function( window ) {
"use strict";
/* main index */
var ind = {
	"%lang-code": "ru",
	"%lang-en": "Russian",
	"%lang-fr": "russe",
	"%lang-nat": "Русский язык",
	"%all": "Все",
	"%home": "На главную",
	"%main-page": "Главная",
	"%tphp": "Наверх",
	"%you-are-in": "Вы находитесь в:",
	"%welcome-to": "Добро пожаловать в:",
	"%load": "Загрузка ...",
	"%process": "обработки ...",
	"%srch": "Поиск",
	"%srch-terms": "Поиск терминов:",
	"%no-match": "Соответствий не найдено",
	"%matches": {
		"mixin": "[MIXIN] cоответствий найдено"
	},
	"%menu": "Меню",
	"%settings": "настройки",
	"%langs": "Языки",
	"%about": "О",
	"%curr": "(текущая)",
	"%hide": "Скрыть",
	"%err": "Ошибка",
	"%colon": ":",
	"%hyphen": " - ",
	"%full-stop": ".",
	"%comma-space": ", ",
	"%space": "&#32;",
	"%start": "Начать",
	"%stop": "Стоп",
	"%back": "Назад",
	"%cancel": "Отменить",
	"%new-win": " (Откроется в новом окне)",
	"%min-ago": "минуту назад",
	"%coup-mins": "пару минут назад",
	"%mins-ago": {
		"mixin": "[MIXIN] минут назад"
	},
	"%hour-ago": "час назад",
	"%hours-ago": {
		"mixin": "[MIXIN] часов назад"
	},
	"%days-ago": {
		"mixin": "[MIXIN] дней назад"
	},
	"%yesterday": "вчера",

	"%nxt": "Следующий",
	"%nxt-r": "Следующий (клавишей стрелка вправо)",
	"%prv": "Предыдущий",
	"%prv-l": "Предыдущий (клавишей стрелка влево)",
	"%first": "Первое",
	"%last": "Последнее",
	"%close-esc": "Закрыть (клавишей Escape)",
	"%show": "Показать",

	/* Archived Web page template */
	"%arch-pg": "Эта веб-страница находится в архиве в Интернете.",
	/* Menu bar */
	"%sm-hlp": "(откройте подменю клавишей Ввод, закройте клавишей Escape)",
	/* Tabbed interface */
	"%tab-rot": {
		"off": "Остановить ротацию вкладки",
		"on": "Начать ротацию вкладки"
	},
	"%tab-list": "Вкладка списка",
	"%tab-pnl-end1": "Конец этой вкладке панели.",
	"%tab-pnl-end2": "Вернитесь на вкладку список",
	"%tab-pnl-end3": "или продолжать остальной страницы.",
	/* Multimedia player */
	"%play": "Проиграть",
	"%pause": "Пауза",
	"%open": "Oткрыть",
	"%close": "Закрыть",
	"%rew": "Перемотка",
	"%ffwd": "Ускоренная перемотка",
	"%mute": {
		"on": "Отключение звука",
		"off": "Включить звук"
	},
	"%cc": {
		"off": "Скрыть Субтитры",
		"on": "Показать Субтитры"
	},
	"%cc-err": "Ошибка загрузки субтитров",
	"%adesc": {
		"on": "Включить описание аудио",
		"off": "Отключить Описание аудио"
	},
	"%prog-bar": "использовать клавиши влево и влраво для передвижения вперед и перемотки",
	"%no-video": "Ваш браузер не поддерживает воспроизведение этого видео, пожалуйста, скачайте видео ниже",
	"%pos": "Текущая позиция:",
	"%perc": "Воспроизведение процентах:",
	"%dur": "Общее время:",
	"%buff": "Буферизованный:",
	/* Share widget */
	"%fav": "Фавориты",
	"%email": "E-mail",
	"%shr-txt": "Поделиться ссылкой на страницу",
	"%shr-hnt": " с {s} ",
	"%shr-email-sub": "Интересные страницы",
	"%shr-email-bd": "Надеюсь, эта страница покажется вам интересной:\n{t} ({u})",
	"%shr-fav-ttl": "(закладку на этой странице)",
	"%shr-man": "Пожалуйста, закройте это окно и нажмите Ctrl-D чтобы добавить эту страницу.",
	"%shr-all": "Показать все ({п})",
	"%shr-all-ttl": "Все закладки сайтов",
	"%shr-disc": "Нет одобрение любых продуктов или услуг, выраженных или подразумеваемых.",
	/* Form validation */
	"%frm-nosubmit": "Формы не могут быть представлены, потому что ",
	"%errs-fnd": " были обнаружены ошибки.",
	"%err-fnd": " была обнаружена ошибка.",
	/* Date picker */
	"%date-hide": "Скрыть календарь",
	"%date-show": "Выберите дату из календаря для поля:",
	"%date-sel": "Выбранный",
	/* Calendar */
	"%days": ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
	"%mnths": ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
	"%cal": "Календарь",
	"%currDay": "(Текущий день)",
	"%cal-goToLnk": "Перейти к<span class=\"wb-inv\"> месяцу года</span>",
	"%cal-goToTtl": "Перейти к месяцу года",
	"%cal-goToMnth": "Месяц:",
	"%cal-goToYr": "Год:",
	"%cal-goToBtn": "Перейти",
	"%prvMnth": "Предыдущий месяц: ",
	"%nxtMnth": "Следующий месяц: ",
	/* Slideout */
	"%show-toc": "Показать оглавление",
	"%hide-toc": "Скрыть оглавление",
	"%toc": "оглавление",
	/* Lightbox */
	"%lb-curr": "Пункт %curr% из %total%",
	"%lb-xhr-err": "Этот контент не удалось загрузить.",
	"%lb-img-err": "Это изображение не удалось загрузить.",
	/* Charts widget */
	"%table-mention": "Таблица",
	"%table-following": "График. Подробности в таблице ниже.",
	/* Session timeout */
	"%st-to-msg-bgn": "Ваш сеанс закончится автоматически в #min# мин #sec# сек.",
	"%st-to-msg-end": "Выберите \"Продолжить сеанс\" продлить сессию.",
	"%st-msgbx-ttl": "Предупреждение сессия тайм-аут",
	"%st-alrdy-to-msg": "Извините сеанс уже истек. Пожалуйста, войдите снова.",
	"%st-btn-cont": "Продолжить сеанс",
	"%st-btn-end": "Завершить сеанс сейчас",
	/* Toggle details */
	"%td-toggle": "Свернуть все",
	"%td-open": "Развернуть все",
	"%td-close": "Свернуть все",
	"%td-ttl-open": "Развернуть все разделы содержания",
	"%td-ttl-close": "Свернуть все разделы содержания",
	/* Table enhancement */
	"%sortAsc": ": aктивировать для сортировке по возрастанию",
	"%sortDesc": ": aктивировать для сортировки по убыванию",
	"%emptyTbl": "Не имеется никаких данных в таблице",
	"%infoEntr": "Показываю с _START_ по _END_ из _TOTAL_ записей",
	"%infoEmpty": "Показываю с 0 по 0 из 0 записей",
	"%infoFilt": "(фильтруется от _MAX_ Всего записей)",
	"%info1000": ",",
	"%lenMenu": "Показать _MENU_ записей",
	/* Geomap */
	"%geo-mapcontrol": "Привязка аэроснимков к карте",
	"%geo-zoomin": "Приблизить",
	"%geo-zoomout": "Отдалить",
	"%geo-zoomworld": "Увеличить для сопоставления степени",
	"%geo-zoomfeature": "Увеличение до элемента",
	"%geo-scaleline": "масштаб карты",
	"%geo-mouseposition": "Широту и долготу курсора мыши",
	"%geo-ariamap": "Карта объектов. Описание функций карты приведены в таблице ниже.",
	"%geo-accessibilize": "<strong>Клавиатура пользователей:</strong> Когда карта находится в фокусе, используйте клавиши со стрелками для перемещения по карте и плюс и минус ключи, чтобы увеличить. Стрелками не будет перемещения по карте при увеличении на карту степени.",
	"%geo-accessibilizetitle": "Инструкция: Карта навигации",
	"%geo-togglelayer": "Включить показ слоя",
	"%geo-hiddenlayer": "Этот слой скрыт.",
	"%geo-basemapurl": "http://geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_CBCT_GEOM_3978/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT3978/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
	"%geo-basemaptitle": "BaseMaps_CBMT3978",
	"%geo-basemapurltxt": "http://geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_TXT_3978/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT3978/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
	"%geo-attributionlink": "http://geogratis.gc.ca/geogratis/CBM_CBC?lang=en",
	"%geo-attributiontitle": "GeoGratis - Канада базовой карты (на английском или французском языке)",
	"%geo-select": "Выбирать",
	"%geo-labelselect": "Проверьте, чтобы выбрать элемент на карте",
	/* Disable/enable WET plugins and polyfills */
	"%wb-disable": "Базовая версия HTML",
	"%wb-enable": "Стандартная версия",
	/* Template */
	"%tmpl-signin": "Войти"
};

window.i18nObj = ind;

})( window );