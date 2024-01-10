

class Option {
    constructor(option) {
        this.label = option.label;
        this.type = option.function_type;
        this.method = null;
    }

    setUpOption() {
        switch(this.type) {
            case "yes":
                this.method = this.yes;
                break;
            case "no":
                this.method = this.no;
                break;
            case "buy":
                this.method = this.buy;
                break;
            case "sell":
                this.method = this.sell;
                break;
            case "check":
                this.method = this.check;
                break;
            case "steal":
                this.method = this.steal;
                break;
            case "leave":
                this.method = this.leave;
            default:
                this.method = null;
        }
    }

    // talk(npc) {
    //     // hello do you want to buy anything?
    // }

    yes() {
        return true;
    }

    no() {
        return false;
    }

    buy(item) {

        // rect();

        // console.log("Do you want to buy " + "item name" + "?");
        // if (yes) {
        //     if (money < price) {
        //         console.log("Not enough money!");
        //         return;
        //     }

        //     console.log("Item bought!");
        // }


    }

    sell(item) {
        // console.log("Are you sure you want to sell this item?");

        // if (yes) {
        //     // remove item, add money to player
        // }


    }

    check(item) {
        // print item description and price

    }
    
    steal(item) {
        // console.log("Are you sure you want to try that?");

        // if (yes) {
        //     // give a percentage chance based on items and such
        // }
    }

    leave() { // exit the shop

    }

    // quit() {
    //     // save and quit?
    //     // 
    // }


}

module.exports = Option;