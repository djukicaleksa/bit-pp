export const render = function (data) {
    console.log(data);
    
    let $content = $('#content');
    let $para = $('<p>').text(data.drinks[0].strDrink);
    let $someImg = $('<img>').attr('src', data.drinks[0].strDrinkThumb);
    let $someDiv = $('<div>').addClass('cocktail');

    $someDiv.append($someImg);
    $someDiv.append($para);
    $content.append($someDiv);

}