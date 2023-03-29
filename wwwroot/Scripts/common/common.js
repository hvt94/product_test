if (window["Globalize"])
    Globalize.culture("vi-VN");
//Globalize.culture("vi-VN");
if (window["moment"])
    moment.locale("vi-VN");

var strips = ["áàảãạăắằẳẵặâấầẩẫậ", "ÁÀẢÃẠĂẮẰẲẴẶÂẤẦẨẪẬ", "đ", "Đ", "éèẻẽẹêếềểễệ", "ÉÈẺẼẸÊẾỀỂỄỆ", "íìỉĩị", "ÍÌỈĨỊ", "óòỏõọơớờởỡợôốồổỗộ", "ÓÒỎÕỌƠỚỜỞỠỢÔỐỒỔỖỘ",
    "ưứừửữựúùủũụ", "ƯỨỪỬỮỰÚÙỦŨỤ", "ýỳỷỹỵ", "ÝỲỶỸỴ"];

var replacements = ['a', 'A', 'd', 'D', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U', 'y', 'Y'];

// Set form validate
// resetForm("#formId");
var resetForm = function (selector) {
    var $form = $(selector);

    $form.validate().resetForm();
    $form.find("[data-val]").removeClass("input-validation-error").addClass("valid");
    $form.find("[data-valmsg-replace]").removeClass("field-validation-error").addClass("field-validation-valid").empty();

    return $form;
};

// Lấy ra Quý từ tháng
function GetQuarter(month) {
    return (month - 1) / 3 + 1;
}

// Kiểm tra email hợp lệ
function CheckEmailFormat(email) {
    var regex = new RegExp("^[a-zA-Z][\\w\\.-]*[a-zA-Z0-9]@[a-zA-Z0-9][\\w\\.-]*[a-zA-Z0-9]\\.[a-zA-Z][a-zA-Z\\.]*[a-zA-Z]$");

    return regex.test($.trim(email));
};

// Định dạng số
function formatNumberic(value, ext) {
    if (isNaN(value)) {
        return "";
    }

    if (parseFloat(value) === 0) {
        return "0";
    }

    if (ext == undefined)
        ext = "N0";

    if (value == null || value === "") {
        return "";
    }

    var radixPoint = Globalize.culture().numberFormat['.'];

    value = Globalize.format(value, ext).toString();
    if (value.split(radixPoint)[1] === "0000" || value.split(radixPoint)[1] === "000" || value.split(radixPoint)[1] === "00" || value.split(radixPoint)[1] === "0") {
        value = value.split(radixPoint)[0];
    }
    return value;
}

//fomatVietNam
function formatVN(value) {
    if (value) {
        value = value.replace(/,/g, "");
        value = value.replace(".", ",");
        return value;
    }
    return "";
}

// Format string dạng tham số
// ReSharper disable once NativeTypePrototypeExtending
String.prototype.format = function () {
    var str = this;
    for (var i = 0; i < arguments.length; i++) {
        var reg = new RegExp("\\{" + i + "\\}", "gm");
        str = str.replace(reg, arguments[i]);
    }
    return str;
}


// ReSharper disable once NativeTypePrototypeExtending
String.prototype.toLowerCaseFirst = function () {
    return this.charAt(0).toLowerCase() + this.slice(1);
}

function stripVietnameseChars(input) {
    var stringBuilder = [];
    for (var k = 0; k < input.length; k++) {
        stringBuilder.push(input.charAt(k));
    }
    for (var i = 0; i < stringBuilder.length; i++) {
        for (var j = 0; j < strips.length; j++) {
            if (strips[j].indexOf(stringBuilder[i]) > -1) {
                stringBuilder[i] = replacements[j];
            }
        }
    }
    return stringBuilder.join("");
};

// Chuyển đổi số sang số la mã
function romanize(num) {
    if (!+num)
        return '';
    var digits = String(+num).split(""),
        key = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM",
            "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC",
            "", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
        roman = "",
        i = 3;
    while (i--)
        roman = (key[+digits.pop() + (i * 10)] || "") + roman;
    return Array(+digits.join("") + 1).join("M") + roman;
}

// khởi tạo mảng số
var strName = ['không', 'một', 'hai', 'ba', 'bốn', 'năm', 'sáu', 'bảy', 'tám', 'chín'];

// Hàm chuyển đổi hàng chục và hàng đơn vị
function convertUnitsToString(number, isRedundant) {
    var str = "";
    var dozens = Math.floor(number / 10);
    var unit = number % 10;
    if (dozens > 1) {
        str = " " + strName[dozens] + " mươi";
        if (unit === 1) {
            str += " mốt";
        }
    } else if (dozens === 1) {
        str = " mười";
        if (unit === 1) {
            str += " một";
        }
    } else if (isRedundant && unit > 0) {
        str = " lẻ";
    }
    if (unit === 5 && dozens > 1) {
        str += " lăm";
    } else if (unit > 1 || (unit === 1 && dozens === 0)) {
        str += " " + strName[unit];
    }
    return str;
}

// Hàng chuyển đổi hàng trăm
function convertHundredsToString(number, isRedundant) {
    var str;
    var hundred = Math.floor(number / 100);
    number = number % 100;
    if (isRedundant || hundred > 0) {
        str = " " + strName[hundred] + " trăm";
        str += convertUnitsToString(number, true);
    } else {
        str = convertUnitsToString(number, false);
    }
    return str;
}

// Hàm chuyển đổi hàng triệu
function convertMillionsToString(number, isRedundant) {
    var str = "";
    var million = Math.floor(number / 1000000);
    number = number % 1000000;
    if (million > 0) {
        str = convertHundredsToString(million, isRedundant) + " triệu";
        isRedundant = true;
    }
    var thousand = Math.floor(number / 1000);
    number = number % 1000;
    if (thousand > 0) {
        str += convertHundredsToString(thousand, isRedundant) + " nghìn";
        isRedundant = true;
    }
    if (number > 0) {
        str += convertHundredsToString(number, isRedundant);
    }
    return str;
}

function NumericToVNamese(number) {
    if (number == 0) {
        return "không";
    }
    else if (number == 1) {
        return "một";
    }
    else if (number == 2) {
        return "hai";
    }
    else if (number == 3) {
        return "ba";
    }
    else if (number == 4) {
        return "bốn";
    } else if (number == 5) {
        return "năm";
    }
    else if (number == 6) {
        return "sáu";
    }
    else if (number == 7) {
        return "bảy";
    }
    else if (number == 8) {
        return "tám";
    }
    else if (number == 9) {
        return "chín";
    }
}

function numbersonly(myfield, e, dec) {
    var key;
    var keychar;

    if (window.event)
        key = window.event.keyCode;
    else if (e)
        key = e.which;
    else
        return true;

    e = e || window.event; // IE support
    var ctrlDown = e.ctrlKey || e.metaKey; // Mac support

    // Check for Alt+Gr (http://en.wikipedia.org/wiki/AltGr_key)
    if (ctrlDown && e.altKey) return true;
    else if (key === 37 || key === 39 || key === 8) return true;// left, right, back
    // Check for ctrl+c, v and x
    else if (ctrlDown && e.keyCode === 65) return true;// c
    else if (ctrlDown && e.keyCode === 67) return true; // c
    else if (ctrlDown && e.keyCode === 86) return true; // v
    else if (ctrlDown && e.keyCode === 88) return true; // x

    if (e.keyCode === 35 || e.keyCode === 36) {
        myfield.focus();
        myfield.select();

        return true;
    }

    keychar = String.fromCharCode(key);

    // control keys
    if ((key == null) || (key == 0) || (key == 8) || (key == 9) || (key == 27)) {
        return true;
    }
    else if (key == 13) {
        return false;
    }
    // numbers
    else if ((("0123456789.,-").indexOf(keychar) > -1))
        return true;

    // decimal point jump
    else if (dec && (keychar == "." || keychar == ",")) {
        myfield.form.elements[dec].focus();
        return false;
    }
    else
        return false;
}

// hàm chuyển đổi hàng tỷ
function convertMoneyToString(number) {
    if (number === 0) return strName[0] + " đồng";
    var str = "", suffixe = "";

    do {
        var billion = number % 1000000000;
        number = Math.floor(number / 1000000000);
        if (number > 0) {
            str = convertMillionsToString(billion, true) + suffixe + str;
        } else {
            str = convertMillionsToString(billion, false) + suffixe + str;
        }
        suffixe = " tỷ";
    } while (number > 0);

    var stringMoney = str + " đồng";
    stringMoney = stringMoney.trim();

    return stringMoney.substring(0, 1).toUpperCase() + stringMoney.substring(1, stringMoney.length);
}

// hàm cắt chuỗi
function substring(str, number) {
    var rt = str.substring(1, number);
    if (str.length > number) {
        rt + '...';
    }
    return rt;
}

function renderItemUserAutocomplete(ul, item) {
    var html = '<div class="media-left"><a class="" href="javascript:;">\
                        <img style="width: 40px;" class="media-object img-circle" src="/Upload/Resize/' + (item.Image ? item.Image : 'L0NvbnRlbnQvaW1hZ2VzL25vbmUuanBn') + '_50x50_0' + '" alt="...">\
                    </a></div>\
                    <div class="media-body">\
                        <h4 class="media-heading">' + item.FullName + ' <span>(' + item.UserName + ')</span></h4>\
                        {span}\
                    </div>';
    if (item.TitleName != null && item.OfficeName != null) {
        html = html.replace(/{span}/ig, "<span>" + item.TitleName + " - " + item.OfficeName + "</span>");
    }

    return $("<li>").addClass('media')
        .append(html)
        .appendTo(ul).addClass('autoMember').addClass('media-list');
};

$(document).ajaxComplete(function (event, xhr) {
    // Lỗi Server (500)
    if (xhr && xhr.readyState === 4 && xhr.status === 500) {
        swal({
            title: "Có gì đó hoạt động không đúng!",
            text: "Vui lòng liên hệ với người quản trị hệ thống.",
            type: 'error',
            confirmButtonText: "Đóng lại",
            allowOutsideClick: false
        });
        return;
        // Lỗi Server (401)
    } else if (xhr && xhr.readyState === 4 && xhr.status === 401) {
        window.reLogin();
        return;
        // Lỗi Server (404)
    } else if (xhr && xhr.readyState === 4 && xhr.status === 404) {
        console.log(xhr);
        swal({
            title: "Dữ liệu không tồn!",
            text: "Dữ liệu bạn yêu cầu không còn tồn tại hoặc đã bị xóa.",
            type: 'error',
            confirmButtonText: "Đóng lại",
            allowOutsideClick: false
        });
        return;
        // Xử lý không có quyền truy cập hệ thống
    } else if (xhr && xhr.readyState === 4 && xhr.status === 200 && xhr.responseJSON && xhr.responseJSON.status === -123
    ) {
        swal({
            title: "Bạn không có quyền truy cập!",
            text: xhr.responseJSON.text,
            type: 'warning',
            confirmButtonText: "Đóng lại",
            allowOutsideClick: false
        });
        return;
    }
    return;
});

window.reLogin = function () {
    window.location.reload();
}

function getListBackupTimes() {
    var period = 15;
    var time = moment(new Date(1970, 0, 1, 0, 0, 0, 0));
    var listTimes = [];
    for (var i = 0; i < 24 * (60 / period); i++) {
        listTimes.push({
            key: parseInt(time.format("HHmm")),
            value: time.format("HH:mm")
        });
        time.add(period, 'm');
    }
    return listTimes;
}

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function inputNumberOnly(event) {
    var code = event.which || event.keyCode;
    return code >= 48 && code <= 57 || code == 8 || code == 46 || code == 37 || code == 39;
}

function getStorage(key) {
    if (!checkCookie())
        return null;

    var now = Date.now();  //epoch time, lets deal only with integer

    // set expiration for storage
    var expiresIn = localStorage.getItem(key + '_expiresIn');

    if (expiresIn === undefined || expiresIn === null) { expiresIn = 0; }
    if (expiresIn < now) {// Expired
        removeStorage(key);
        return null;
    } else {
        try {
            var value = localStorage.getItem(key);
            return JSON.parse(value);

        } catch (e) {
            return null;
        }
    }
}

function setStorage(key, value, expires) {
    if (!checkCookie())
        return;

    if (expires === undefined || expires === null) {
        expires = (24 * 60 * 60);  // default: seconds for 1 day
    } else {
        expires = Math.abs(24 * 60 * 60 * expires); //make sure it's positive
    }

    var now = Date.now();  //millisecs since epoch time, lets deal only with integer
    var schedule = now + expires * 1000;

    try {
        localStorage.setItem(key, JSON.stringify(value));
        localStorage.setItem(key + '_expiresIn', schedule);
    } catch (e) {
        return false;
    }

    return true;
}

function ShowLoadingPanel() {

    $('body').addClass('loading-page');
}
// Hàm tắt thông báo đang tải dữ liệu khi click vào các menu
function HideLoadingPanel() {
    $('body').removeClass('loading-page');
}
 
$(document).ajaxStart(function () {
    try {
        ShowLoadingPanel();
    } catch (e) {

    }

});
$(document).ajaxStop(function () {
    try {
        HideLoadingPanel();
    } catch (e) {

    }
});


function inputNumberDauChamPhay(event) {
    var code = event.which || event.keyCode;
    
    return code >= 48 && code <= 57 || code == 8 || code == 46 || code == 37 || code == 39;
}