let getReady = function () {
    document.title = process.env.VUE_APP_TITLE
}

$.ready(function () {
    getReady();
});
