var $btnExpand = $(".btn-expand");
var $togglePanel = $('.toggle-panel');

$btnExpand.on('click', function() {
    $togglePanel.toggleClass('toggle-panel-expand');
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

$('.scrolldown').localScroll();

$('.scrollup').localScroll();

$('.about').localScroll();

$('.concerns').localScroll();

$('.adopt').localScroll();

var $pawSection = $('.js-paw');

$pawSection.on('click', function () {
    $pawSection.toggleClass('js-paw-active');
});