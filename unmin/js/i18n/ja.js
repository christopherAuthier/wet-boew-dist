/*! Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW) wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 - v4.0.0-a1-development - 2013-11-11
*/
/*
 * Web Experience Toolkit (WET) / Boîte à outils de l"expérience Web (BOEW)
 * wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 */
/*
----- Japanese dictionary (il8n) ---
 */
( function( window ) {
"use strict";
/* main index */
var ind = {
	"%lang-code": "ja",
	"%lang-en": "Japanese",
	"%lang-fr": "japonais",
	"%lang-nat": "日本語",
	"%all": "すべて",
	"%home": "ホーム",
	"%main-page": "メインページ",
	"%tphp": "ページの先頭",
	"%you-are-in": "現在位置：",
	"%welcome-to": "[xxx] へようこそ",
	"%load": "ロード中･･･",
	"%process": "処理中･･･",
	"%srch": "検索",
	"%srch-terms": "検索キーワード：",
	"%no-match": "次の条件に一致する情報は見つかりませんでした。",
	"%matches": {
		"mixin": "検索結果： [MIXIN] 件"
	},
	"%menu": "メニュー",
	"%settings": "設定",
	"%langs": "言語",
	"%about": "約",
	"%curr": "（現在）",
	"%hide": "非表示",
	"%err": "エラー",
	"%colon": "：",
	"%hyphen": "-",
	"%full-stop": "。",
	"%comma-space": "、",
	"%space": "&#173;",
	"%start": "開始",
	"%stop": "終了",
	"%back": "戻る",
	"%cancel": "取消",
	"%new-win": " （新しいウィンドウで開く）",
	"%min-ago": "1分前",
	"%coup-mins": "数分前",
	"%mins-ago": {
		"mixin": "[MIXIN] 分前"
	},
	"%hour-ago": "1時間前",
	"%hours-ago": {
		"mixin": "[MIXIN] 時間前"
	},
	"%days-ago": {
		"mixin": "[MIXIN] 日前"
	},
	"%yesterday": "昨日",

	"%nxt": "次へ",
	"%nxt-r": "次へ（右矢印キー）",
	"%prv": "前へ",
	"%prv-l": "前へ（左矢印キー）",
	"%first": "最初",
	"%last": "最後",
	"%close-esc": "閉じる(「Esc」キ)",
	"%show": "表示",

	/* Archived Web page template */
	"%arch-pg": "このページはウェブ上にアーカイブされています。",
	/* Menu bar */
	"%sm-hlp": "（サブメニューを開くには「エンター」キーを、閉じるには「Esc」キーを押す。）",
	/* Tabbed interface */
	"%tab-rot": {
		"off": "タブローテーションを停止",
		"on": "タブローテーションを再生"
	},
	"%tab-list": "タブリスト",
	"%tab-pnl-end1": "最後のタブパネル",
	"%tab-pnl-end2": "タブの一覧に戻る",
	"%tab-pnl-end3": "または、ページの残りの部分に進む。",
	/* Multimedia player */
	"%play": "再生",
	"%pause": "一時停止",
	"%open": "開く",
	"%close": "閉じる",
	"%rew": "巻き戻し",
	"%ffwd": "早送り",
	"%mute": {
		"on": "ミュート",
		"off": "ミュート解除"
	},
	"%cc": {
		"off": "クローズドキャプションを非表示",
		"on": "クローズドキャプションを表示"
	},
	"%cc-err": "クローズドキャプションを実行できませんでした。",
	"%adesc": {
		"on": "音声ガイドを有効にする",
		"off": "音声ガイドを無効にする"
	},
	"%prog-bar": "左矢印キーで戻る／右矢印キーで進む",
	"%no-video": "ご利用のブラウザではこの動画を再生できません。以下の動画をダウンロードしてください。",
	"%pos": "現在位置：",
	"%perc": "再生率：",
	"%dur": "合計時間：",
	"%buff": "バッファリングの進行状況：",
	/* Share widget */
	"%fav": "お気に入り",
	"%email": "メール",
	"%shr-txt": "このページを共有する",
	"%shr-hnt": "{s}と",
	"%shr-email-sub": "注目のページ",
	"%shr-email-bd": "おすすめのページ：\n{t} ({u})",
	"%shr-fav-ttl": "（ブックマークに登録する）",
	"%shr-man": "ブックマークに登録するには、このダイアログを閉じて「Ctrl＋D」を押してください。",
	"%shr-all": "({n})をすべて表示",
	"%shr-all-ttl": "ブックマークサイト一覧",
	"%shr-disc": "製品またはサービスを推薦／保証するものではありません。",
	/* Form validation */
	"%frm-nosubmit": "フォームを送信できませんでした。原因：",
	"%errs-fnd": "複数のエラーが見つかりました。",
	"%err-fnd": "エラーが見つかりました。",
	/* Date picker */
	"%date-hide": "カレンダーを非表示",
	"%date-show": "カレンダーから日付を選択：",
	"%date-sel": "選択済み",
	/* Calendar */
	"%days": ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"],
	"%mnths": ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
	"%cal": "カレンダー",
	"%currDay": "（今日）",
	"%cal-goToLnk": "<span class=\"wb-inv\">月</span>に移動",
	"%cal-goToTtl": "月移動",
	"%cal-goToMnth": "月：",
	"%cal-goToYr": "年：",
	"%cal-goToBtn": "進む",
	"%prvMnth": "前の月へ",
	"%nxtMnth": "次の月へ",
	/* Slideout */
	"%show-toc": "目次を表示する",
	"%hide-toc": "目次を表示しない",
	"%toc": "目次",
	/* Lightbox */
	"%lb-curr": "%total% 件中 %curr% 件目",
	"%lb-xhr-err": "コンテンツをロードできませんでした。",
	"%lb-img-err": "画像をロードできませんでした。",
	/* Charts widget */
	"%table-mention": "表",
	"%table-following": "チャート図。詳細については次の表を参照。",
	/* Session timeout */
	"%st-to-msg-bgn": "セッションは、 #min# 分 #sec# 秒で自動的に期限切れになります。",
	"%st-to-msg-end": "選択はあなたのセッションを延長する\"セッションを続ける\"。",
	"%st-msgbx-ttl": "セッションタイムアウト警告",
	"%st-alrdy-to-msg": "セッションがタイムアウトしました。再度ログインを行なってください。",
	"%st-btn-cont": "セッションを続行",
	"%st-btn-end": "今セッションを終了します",
	/* Toggle details */
	"%td-toggle": "表示形式を全て切り替える",
	"%td-open": "全て開く",
	"%td-close": "全て閉じる",
	"%td-ttl-open": "コンテンツの全てのセクションを開く",
	"%td-ttl-close": "コンテンツの全てのセクションを閉じる",
	/* Table enhancement */
	"%sortAsc": "：昇順ソートをオンにする",
	"%sortDesc": "：降順ソートをオンにする",
	"%emptyTbl": "表の中にデータがありません",
	"%infoEntr": "_TOTAL_エントリーの_START_から_END_までを表示",
	"%infoEmpty": "0エントリーのうち、0から0までを表示",
	"%infoFilt": "（合計_MAX_エントリーからフィルタリング）",
	"%info1000": ",",
	"%lenMenu": "_MENU_エントリーを表示",
	/* Geomap */
	"%geo-mapcontrol": "マップコントロール",
	"%geo-zoomin": "ズームイン",
	"%geo-zoomout": "ズームアウト",
	"%geo-zoomworld": "地図を最大に拡大表示する",
	"%geo-zoomfeature": "エレメントにズームイン",
	"%geo-scaleline": "地図の縮尺",
	"%geo-mouseposition": "マウスカーソルの緯度と経度",
	"%geo-ariamap": "地図オブジェクト。地図機能の詳細については以下を参照。",
	"%geo-accessibilize": "<strong>キーボードをお使いの方へ：</strong>地図が表示されたら、「矢印」キーで上下左右に移動したり、「＋」「－」キーで拡大・縮小できます。地図が最大に拡大表示されている時は、「矢印」キーを使って移動できません。",
	"%geo-accessibilizetitle": "地図ナビゲーションの使い方",
	"%geo-togglelayer": "レイヤーの表示・非表示の切り替え",
	"%geo-hiddenlayer": "このレイヤーは表示されていません。",
	"%geo-basemapurl": "http://geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_CBCT_GEOM_3978/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT3978/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
	"%geo-basemaptitle": "BaseMaps_CBMT3978",
	"%geo-basemapurltxt": "http://geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_TXT_3978/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT3978/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
	"%geo-attributionlink": "http://geogratis.gc.ca/geogratis/CBM_CBC?lang=en",
	"%geo-attributiontitle": "GeoGratis-カナダベースマップ（英語またはフランス語のみ",
	"%geo-select": "選択",
	"%geo-labelselect": "マップエレメントを選択",
	/* Disable/enable WET plugins and polyfills */
	"%wb-disable": "HTMLベーシック版",
	"%wb-enable": "スタンダード版",
	/* Template */
	"%tmpl-signin": "サインイン"
};

window.i18nObj = ind;

})( window );

vapour.doc.one( "formLanguages.wb", function() {
/*
 * Translated default messages for the jQuery validation plugin.
 * Locale: JA (Japanese; 日本語)
 */
(function ($) {
	$.extend($.validator.messages, {
		required: "このフィールドは必須です。",
		remote: "このフィールドを修正してください。",
		email: "有効なEメールアドレスを入力してください。",
		url: "有効なURLを入力してください。",
		date: "有効な日付を入力してください。",
		dateISO: "有効な日付（ISO）を入力してください。",
		number: "有効な数字を入力してください。",
		digits: "数字のみを入力してください。",
		creditcard: "有効なクレジットカード番号を入力してください。",
		equalTo: "同じ値をもう一度入力してください。",
		accept: "有効な拡張子を含む値を入力してください。",
		maxlength: $.format("{0} 文字以内で入力してください。"),
		minlength: $.format("{0} 文字以上で入力してください。"),
		rangelength: $.format("{0} 文字から {1} 文字までの値を入力してください。"),
		range: $.format("{0} から {1} までの値を入力してください。"),
		max: $.format("{0} 以下の値を入力してください。"),
		min: $.format("{0} 以上の値を入力してください。")
	});
}(jQuery));

});