const Menu = require('./menu');

class ShopMenu extends Menu {
    /**
     * @param {Array} items // Array of items to draw, same length as number of spaces
     * @param {Number} spaces // Number of spaces for items
     * @param {Number} start_x // x pos
     * @param {Number} start_y // y pos
     * @param {Number} per_row // spaces per row
     * @param {Number} per_column // spaces per column
     * @param {Number} pen_color // from numbered palette colors
     */
    constructor(items, spaces, start_x, start_y, per_row, per_column, pen_color) {
        super(spaces, start_x, start_y, per_row, per_column, pen_color);

        this.items = items;
    }

    drawShopMenu() {
        let x = this.start_x + 1; // so it fits within the spaces
        let y = this.start_y + 1;

        let row_count = 0;
        // let col_count = 0;

        for (let i = 0; i < this.items.length; i++) {
            if (row_count === this.per_row) {
                x = this.start_x + 1;
                y += 11;
                row_count = 0;
            }

            sprite(this.items[i].spr, x, y);
            x += 11;
            row_count++;
        }
    }

    checkIfShopEmpty() { // find first one that is empty
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].spr === 1) {
                return i;
            }
        }

        return -1;
    }

    addItemToShop(item) {
        const pos = this.checkIfShopEmpty();

        if (pos === -1) {
            return false;
        }

        this.items[pos] = item;
        return true;
    }

    addItemToShopGivenPos(item, pos) {
        if (pos < 0 || pos >= this.items.length) {
            return false;
        }

        if (this.items[pos].spr === 1) {
            this.items[pos] = item;
            return true;
        }

        return false;
    }

    // next would be the ability to buy, sell, steal from a shop

    // unused code saved for later

    // getAllEmptySpots() {
    //     const empty_spots = [];

    //     for (let i = 0; i < this.items.length; i++) {
    //         if (this.items[i].spr === 1) {
    //             empty_spots.push(i);
    //         }
    //     }

    //     this.empty_spots = empty_spots;
    // }

    // if the menu items length don't correlate with it's spaces

    // addItemToShop(item) {
    //     // if (this.items.length + 1 > this.spaces) {
    //     //     return false;
    //     // }

    //     // this.items.push(item);
    //     // return true;
    // }

    // addItemToShopGivenPos(item, pos) {
    //     // if (pos < 0 || this.items.length + 1 > this.spaces) {
    //     //     return false;
    //     // }

    //     // if (pos === this.items.length) { // if it is at the end of the items
    //     //     this.items.push(item);
    //     //     return true;
    //     // }

    //     // if (this.items[pos].spr ===  1) { // if it's empty spot
    //     //     this.items[pos] = item;
    //     //     return true;
    //     // }

    //     // // 1. using another array

    //     // const temp_arr = [];

    //     // for (let i = 0; i < pos; i++) {
    //     //     temp_arr.push(this.items[i]); // everything before expected pos
    //     // }

    //     // temp_arr.push(item); // item is now in expected pos

    //     // for (let j = pos; j < this.items.length; j++) { // push rest of the items afterwards
    //     //     temp_arr.push(this.items[j]);
    //     // }

    //     // this.items = temp_arr; // switch arrays

    //     // // 2. using the same array swaps backwards

    //     // this.items.push(this.items[this.items.length - 1]); // push the last item into the arr

    //     // for (let i = this.items.length - 3; i > pos; i--) { // get the next item
    //     //     this.items[i] = this.items[i - 1]; // replace current item with the item in front of it
    //     // }

    //     // this.items[pos] = item; // set item in expected pos

           // // 3. using the same array swaps forwards

    //     // this.items.push(item);

    //     // let switch_item;

    //     // for (let i = pos; i < this.items.length; i++) {
    //     //     switch_item = this.items[i];
    //     //     this.items[i] = this.items[this.items.length - 1];
    //     //     this.items[this.items.length - 1] = switch_item;
    //     // }
    // }
}

module.exports = ShopMenu;