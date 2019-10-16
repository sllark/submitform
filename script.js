"use strict";

(function () {
    if (!Array.prototype.forEach) {
        Array.prototype.forEach = function (callback, thisArg) {
            thisArg = thisArg || window;

            for (var i = 0; i < this.length; i++) {
                callback.call(thisArg, this[i], i, this);
            }
        };
    }

    function validateEmail(email) {
        var regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        return regex.test(String(email).toLowerCase());
    }

    var url = window.location.href;

    if (url.indexOf('%') !== -1) {
        url = decodeURI(url);
    }

    var urlParts = url.split("/");
    urlParts.forEach(function (part) {
        if (part[0] === '?') {
            var email = part;
            email = email.slice(4, part.length);
            if (!validateEmail(email)) return 0;
            var emailField = document.getElementById('email'),
                form = document.querySelector('.grsf-signup-form');
            emailField.value = email;
            form.submit();
            return 0;
        }
    });
})();