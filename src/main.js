const ShopMenu = require("./shopmenu");

const map = getMap("map");
paper(1);
pen(0);

const menu2 = new ShopMenu([{spr: 0}, {spr: 1}, {spr: 1}, {spr: 48}, {spr:1}, {spr: 48}], 6, 5, 5, 4, 2, 0);
menu2.createMenu("shop", [{"label": "Buy", "function_type": "buy"}, {"label": "Sell", "function_type": "sell"}]);
menu2.createMenu("yesno", [{"label": "Yes", "function_type": "yes"}, {"label": "No", "function_type": "no"}]);


// Update is called once per frame
exports.update = function () {
	cls();
    draw(map,0,0);
    menu2.drawMenu();
    menu2.drawShopMenu();
    menu2.drawOptionsMenu("shop");
    menu2.drawMenuSelector();
    menu2.setMenuSelector("shop");

};