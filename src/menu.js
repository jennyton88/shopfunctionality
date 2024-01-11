// This will be the general class for menus, which will be extended by inventory and shop menu.
const Option = require("./option");

class Menu {
    /**
     * @param {Number} spaces // Number of spaces for items
     * @param {Number} start_x // x pos
     * @param {Number} start_y // y pos
     * @param {Number} per_row // spaces per row
     * @param {Number} per_column // spaces per column
     * @param {Number} pen_color // from numbered palette colors
     */
    constructor(spaces, start_x, start_y, per_row, per_column, pen_color) {//, menu_options) {
        this.spaces = spaces;
        this.start_x = start_x;
        this.start_y = start_y;
        this.per_row = per_row;
        this.per_column = per_column;
        this.pen_color = pen_color;

        //this.menu_options = menu_options; // create an options menu separate
        this.menu_options = [];
        this.menu_selector_pos = 0;
        this.menu_selector = [this.start_x + this.per_row * 11 + 2, this.start_y + 5];
    }

    drawMenu() {
        let x = this.start_x;
        let y = this.start_y;
        let w = 10;
        let h = 10;

        for (let i = 0; i < this.per_column; i++) {
            for (let j = 0; j < this.per_row; j++) {
                rect(x, y, w, h);
                x += 11;
            }
            x = this.start_x;
            y += 11;
        }
    }

    drawOptionsMenu() { // would have to make box sizing based on the sides of the game, words, and spaces to the left 
        let x = this.start_x + this.per_row * 11 + 4;
        let y = this.start_y + 5;

        for (let i = 0; i < this.menu_options.length; i++) {
            print(this.menu_options[i].label, x, y);
            y += 9;
        }

        const phrases = this.menu_options.length;
        const word_size = 5 + 4;
        rect(this.start_x + this.per_row * 11, this.start_y, 52, phrases * word_size + 6);
    }

    drawSelector() {
        sprite(2, this.menu_selector[0], this.menu_selector[1]);
    }

    setSelector() {
        const options_count = this.menu_options.length;
        let selector_pos = this.menu_selector_pos;
        let selector_pos_x = this.menu_selector[0]; // where the menu shows
        let selector_pos_y = this.menu_selector[1];

        console.log(this.selector_pos);
        if (btnp.up) {
            selector_pos -= 1;
            if (selector_pos < 0) {
                selector_pos = 0;
            } else {
                selector_pos_y -= 9;
            }
        }
        
        if (btnp.down) {
            selector_pos += 1;
            if (selector_pos >= options_count)  {
                selector_pos = options_count - 1;
            } else {
                selector_pos_y += 9;
            }
        }
        
        this.menu_selector_pos = selector_pos;
        this.menu_selector[0] = selector_pos_x
        this.menu_selector[1] = selector_pos_y;
    }

    // drawYesNoMenu() {
        
    // }

    addOptionsToMenu(options) {
        for (let i = 0; i < options.length; i++) {
            let option = new Option(options[i]);
            option.setUpOption();
            this.menu_options.push(option);
        }
    }

    // /**
    //  * @param {Number} spaces
    //  */
    // set menuSpaces(spaces) {
    //     this.spaces = spaces;
    // }
}

module.exports = Menu;