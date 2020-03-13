let $content = $('#content');
import { request } from './data.js';
import { render } from './ui.js';
// request();
$('#addCocktail').on('click', request);
$('#removeCocktail').on('click', function () {
    $('#content').html('');
})