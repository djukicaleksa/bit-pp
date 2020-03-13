import { render } from './ui.js';
export const request = function () {
    $.ajax({
        url: `https://www.thecocktaildb.com/api/json/v1/1/random.php`,

        method: 'GET'
    }).done(function (data) {
        render(data);
    })


}