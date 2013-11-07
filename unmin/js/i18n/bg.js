/*! Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW) wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 - v4.0.0-a1-development - 2013-11-07
*/
/*
 * Web Experience Toolkit (WET) / Boîte à outils de l"expérience Web (BOEW)
 * wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 */
/*
----- Bulgarian dictionary (il8n) ---
 */
( function( window ) {
"use strict";
/* main index */
var ind = {
	"%lang-code": "bg",
	"%lang-en": "Bulgarian",
	"%lang-fr": "bulgare",
	"%lang-nat": "Български език",
	"%all": "Всички",
	"%home": "Дом",
	"%main-page": "Главна страница",
	"%tphp": "Начало на страницата",
	"%you-are-in": "Вие се намирате в",
	"%welcome-to": "Добре дошли в",
	"%load": "зарежда се ...",
	"%process": "Обработва се ...",
	"%srch": "Търсене",
	"%srch-terms": "Търсене за термини:",
	"%no-match": "Не е съвпадение, установиха",
	"%matches": {
		"mixin": "[MIXIN] открити съвпадения"
	},
	"%menu": "Меню",
	"%settings": "Настройки",
	"%langs": "Езици",
	"%about": "За",
	"%curr": "(Текущи)",
	"%hide": "Крия",
	"%err": "Грешка",
	"%colon": ":",
	"%hyphen": " - ",
	"%full-stop": ".",
	"%comma-space": ", ",
	"%space": "&#32;",
	"%start": "Начало",
	"%stop": "Спиране",
	"%back": "Назад",
	"%cancel": "Отказ",
	"%new-win": " (Отваря се в нов прозорец)",
	"%min-ago": "преди минута",
	"%coup-mins": "Преди няколко минути",
	"%mins-ago": {
		"mixin": "[MIXIN] минути"
	},
	"%hour-ago": "преди час",
	"%hours-ago": {
		"mixin": "[MIXIN] часа преди"
	},
	"%days-ago": {
		"mixin": "[MIXIN] дни"
	},
	"%yesterday": "вчера",

	"%nxt": "Следваща",
	"%nxt-r": "Следваща (дясна стрелка)",
	"%prv": "Предишен",
	"%prv-l": "Предишен (лява стрелка ключ)",
	"%first": "Първи",
	"%last": "Последно",
	"%close-esc": "Затворете (бягство ключ)",
	"%show": "Показване",

	/* Archived Web page template */
	"%arch-pg": "Тази страница е архивиран в мрежата.",
	/* Menu bar */
	"%sm-hlp": "(отворите подменюто с клавиша и в близост с бягство ключ)",
	/* Tabbed interface */
	"%tab-rot": {
		"off": "Спри да се върти раздела",
		"on": "Започнете въртене раздела"
	},
	"%tab-list": "Списък на разделите",
	"%tab-pnl-end1": "В края на този раздел панел.",
	"%tab-pnl-end2": "Назад към списъка раздела",
	"%tab-pnl-end3": "или да продължат да останалата част от страницата.",
	/* Multimedia player */
	"%play": "Играя",
	"%pause": "Пауза",
	"%open": "Отворен",
	"%close": "Близо",
	"%rew": "Превъртане назад",
	"%ffwd": "Бързо напред",
	"%mute": {
		"on": "Изключване",
		"off": "Вкл.звук"
	},
	"%cc": {
		"off": "Скрий Затворени надписи",
		"on": "Покажи Затворени надписи"
	},
	"%cc-err": "Грешка при зареждане на затворени надписи",
	"%adesc": {
		"on": "Активиране на аудио описание",
		"off": "Изключване на аудио описание"
	},
	"%prog-bar": "Използвайте лява и дясна стрелка, за да преминете и назад напредъка на медиите",
	"%no-video": "Вашият браузър не изглежда да имаме възможност да играе този клип, моля да изтеглите видеото по-долу",
	"%pos": "Позиция:",
	"%perc": "Възпроизвеждането проценти:",
	"%dur": "Общо време:",
	"%buff": "Буфериран:",
	/* Share widget */
	"%fav": "Любими",
	"%email": "Мейл",
	"%shr-txt": "Споделете тази страница",
	"%shr-hnt": " с {s} ",
	"%shr-email-sub": "Интересни страница",
	"%shr-email-bd": "Мислех, че може да намери тази страница интересно:\n{t} ({u})",
	"%shr-fav-ttl": "(Запомнете тази страница)",
	"%shr-man": "Моля, затворете този диалогов прозорец и натиснете Ctrl-D Запомнете тази страница.",
	"%shr-all": "Виж всички ({n})",
	"%shr-all-ttl": "Всички Маркиране на сайтове",
	"%shr-disc": "Липса на одобрение на продукти или услуги, изрични или подразбиращи се",
	/* Form validation */
	"%frm-nosubmit": "Форма не могат да се подават, тъй като ",
	"%errs-fnd": " бяха открити грешки.",
	"%err-fnd": " грешка е намерен.",
	/* Date picker */
	"%date-hide": "Скриване на календара",
	"%date-show": "Изберете дата от календара за областта:",
	"%date-sel": "Подбран",
	/* Calendar */
	"%days": ["Неделя", "Понеделник", "Вторник", "Сряда", "Четвъртък", "Петък", "Събота"],
	"%mnths": ["Януари", "Февруари", "Март", "Април", "Май", "Юни", "Юли", "Август", "Септември", "Октомври", "Ноември", "Декември"],
	"%cal": "Календар",
	"%currDay": "(Текущия ден)",
	"%cal-goToLnk": "Отиди на<span class=\"wb-inv\"> месец на годината</span>",
	"%cal-goToTtl": "Отиди на месец на годината",
	"%cal-goToMnth": "Месец:",
	"%cal-goToYr": "Година:",
	"%cal-goToBtn": "Отивам",
	"%prvMnth": "Предходния месец: ",
	"%nxtMnth": "Следващия месец: ",
	/* Slideout */
	"%show-toc": "Покажи съдържание",
	"%hide-toc": "Скриване на съдържание",
	"%toc": "съдържание",
	/* Lightbox */
	"%lb-curr": "Член %curr% от %total%",
	"%lb-xhr-err": "Това съдържание не успя да се зареди.",
	"%lb-img-err": "Това изображение не успя да се зареди.",
	/* Charts widget */
	"%table-mention": "Маса",
	"%table-following": "Графика. Подробности в таблицата по-долу.",
	/* Session timeout */
	"%st-to-msg-bgn": "Вашата сесия ще изтече автоматично в #min# мин. #sec# сек.",
	"%st-to-msg-end": "Изберете \"Продължи сесия\" да се разшири вашата сесия.",
	"%st-msgbx-ttl": "Предупреждение Изтекла сесия",
	"%st-alrdy-to-msg": "За съжаление вашата сесия вече е изтекъл. Моля, влезте отново.",
	"%st-btn-cont": "Продължи сесия",
	"%st-btn-end": "Край на сесията сега",
	/* Toggle details */
	"%td-toggle": "Превключване всички",
	"%td-open": "Разгъване на всички",
	"%td-close": "Свиване на всички",
	"%td-ttl-open": "Разгъване на всички раздели на съдържание",
	"%td-ttl-close": "Сгъване на всички раздели на съдържание",
	/* Table enhancement */
	"%sortAsc": "активира за възходящ вид",
	"%sortDesc": "активирате за низходяща вид",
	"%emptyTbl": "Няма налични данни в таблицата",
	"%infoEntr": "Показване _START_ до _END_ от общо _TOTAL_ вписвания",
	"%infoEmpty": "Показване 0 до 0 от общо 0 вписвания",
	"%infoFilt": "(филтрирани от _MAX_ всички записи)",
	"%info1000": ",",
	"%lenMenu": "Покажи _MENU_ вписвания",
	/* Geomap */
	"%geo-mapcontrol": "Карта контрол",
	"%geo-zoomin": "Увеличаване на мащаба",
	"%geo-zoomout": "Намаляване на мащаба",
	"%geo-zoomworld": "Мащаба, за да картата степен",
	"%geo-zoomfeature": "Увеличите до елемента",
	"%geo-scaleline": "Карта мащаб",
	"%geo-mouseposition": "Географска ширина и дължина на курсора на мишката",
	"%geo-ariamap": "Карта обект. Описанията на картата функции са в таблицата по-долу.",
	"%geo-accessibilize": "Клавиатура потребители: Когато картата е на фокус, използвайте клавишите със стрелки, за да се придвижвате карта и бутоните плюс и минус за увеличение. Клавишите със стрелки, които не са ще видиш картата когато увеличени картата степен.",
	"%geo-accessibilizetitle": "Инструкции: навигационна карта",
	"%geo-togglelayer": "Превключване на дисплея на слоя",
	"%geo-hiddenlayer": "Този слой в момента е скрит.",
	"%geo-basemapurl": "http://geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_CBCT_GEOM_3978/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT3978/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
	"%geo-basemaptitle": "BaseMaps_CBMT3978",
	"%geo-basemapurltxt": "http://geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_TXT_3978/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT3978/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
	"%geo-attributionlink": "http://geogratis.gc.ca/geogratis/CBM_CBC?lang=en",
	"%geo-attributiontitle": "GeoGratis - Канада основната карта (на английски или френски език)",
	"%geo-select": "Изберете",
	"%geo-labelselect": "Проверете, за да изберете елемента на картата",
	/* Disable/enable WET plugins and polyfills */
	"%wb-disable": "Базов HTML версия",
	"%wb-enable": "Стандартната версия",
	/* Template */
	"%tmpl-signin": "Вход"
};

window.i18nObj = ind;

})( window );