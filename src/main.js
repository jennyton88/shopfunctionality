const Menu = require("./menu");
const ShopMenu = require("./shopmenu");

const map = getMap("map");
paper(1);
pen(0);

//const menu = new Menu(6, 5, 5, 2, 3, 0);
const menu2 = new ShopMenu([{spr: 0}, {spr: 1}, {spr: 1}, {spr: 48}, {spr:1}, {spr: 48}], 6, 5, 5, 3, 2, 0);

// let test = menu2.addItemToShop({spr: 245});
// let test2 = menu2.addItemToShopGivenPos({spr: 131}, 2);
// let test3 = menu2.addItemToShop({spr: 245});
// let test4 = menu2.addItemToShop({spr: 0});

//▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// Update is called once per frame
exports.update = function () {
	cls();
    draw(map,0,0);
    //menu.drawMenu();
    menu2.drawMenu();
    menu2.drawShopMenu();

};