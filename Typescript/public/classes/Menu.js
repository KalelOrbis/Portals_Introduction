"use strict";
class Menu {
    constructor(id, entry, mainCourse, dessert) {
        this.id = id;
        this.entry = entry;
        this.mainCourse = mainCourse;
        this.dessert = dessert;
    }
    getMenuSeparated() {
        return this.id + ";" + this.entry + ";"
            + this.mainCourse + ";" + this.dessert;
    }
}
