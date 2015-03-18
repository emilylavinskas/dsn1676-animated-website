var $btnExpand = $(".btn-expand");
var $panel = $('.panel');

$btnExpand.on('click', function() {
    $panel.toggleClass('js-panel-expand');
});

var $btnAboutExpand = $('.btn-about-expand');
var $panel = $('.about-panel');

$btnAboutExpand.on('click', function () {
    $panel.toggleClass('about-open');
});

var $btnIssuesExpand = $('.btn-issues-expand');
var $panelIssues = $('.issues-panel');

$btnIssuesExpand.on('click', function () {
    $panelIssues.toggleClass('issues-open');
});

var $btnAdoptExpand = $('.btn-adopt-expand');
var $panelAdopt = $('.adopt-panel');

$btnAdoptExpand.on('click', function () {
    $panelAdopt.toggleClass('adopt-open');
});
