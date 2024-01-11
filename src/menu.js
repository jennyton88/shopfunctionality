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
    constructor(spaces, start_x, start_y, per_row, per_column, pen_color) {
        this.spaces = spaces;
        this.start_x = start_x;
        this.start_y = start_y;
        this.per_row = per_row;
        this.per_column = per_column;
        this.pen_color = pen_color;

        this.menus = [];

        this.current_menu = "";
        this.current_menu_index = -1; // for the selector
        //this.menu_options = [];
        this.menu_selector_pos = 0;
        this.menu_selection = {"selected": false, "pos": this.menu_selector_pos}; // could add the current name here for selection
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

    // drawDescriptorMenu(item) {
    //     //rect();
    //     //print(item.label + " " + item.descrip);
    // }

    drawOptionsMenu(menu_name) { // would have to make box sizing based on the sides of the game, words, and spaces to the left 
        const index = this.getMenu(menu_name);

        if (index === -1) {
            return;
        }

        let x = this.start_x + this.per_row * 11 + 4;
        let y = this.start_y + 5;

        for (let i = 0; i < this.menus[index].menu_options.length; i++) {
            print(this.menus[index].menu_options[i].label, x, y);
            y += 9;
        }

        const phrases = this.menus[index].menu_options.length;
        const word_size = 5 + 4;
        rect(this.start_x + this.per_row * 11, this.start_y, 52, phrases * word_size + 6);
    }

    drawMenuSelector() {
        sprite(2, this.menu_selector[0], this.menu_selector[1]);
    }

    setMenuSelector(menu_name) {
        const index = this.getMenu(menu_name);

        if (index === -1) {
            return -1;
        }

        this.current_menu = menu_name; // could be separated
        this.current_menu_index = index;

        const options_count = this.menus[index].menu_options.length;
        let selector_pos = this.menu_selector_pos;
        let selector_pos_y = this.menu_selector[1];

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

        if (btnp.enter) {
            this.menu_selection.selected = true;
            this.menu_selection.pos = selector_pos;
        }

        this.menu_selector_pos = selector_pos;
        this.menu_selector[1] = selector_pos_y;
    }

    // addOptionsToMenu(options) {
    //     for (let i = 0; i < options.length; i++) {
    //         let option = new Option(options[i]);
    //         option.setUpOption();
    //         this.menu_options.push(option);
    //     }
    // }

    getMenu(menu_label) {
        for (let i = 0; i < this.menus.length; i++) {
            if (menu_label === this.menus[i].menu_label) {
                return i;
            }
        }

        return -1;
    }

    createMenu(menu_label, options) {
        const menu_options = [];

        for (let i = 0; i < options.length; i++) {
            let option = new Option(options[i]);
            option.setUpOption();
            menu_options.push(option);
        }

        this.menus.push({"menu_label": menu_label, "menu_options": menu_options});
    }

    // /**
    //  * @param {Number} spaces
    //  */
    // set menuSpaces(spaces) {
    //     this.spaces = spaces;
    // }
}

module.exports = Menu;