class Menu
{
    constructor(
        readonly id: string,
        public entry: string,
        public mainCourse: string,
        public dessert: string)
    {}

    getMenuSeparated()
    {
        return this.id + ";" + this.entry + ";"
            + this.mainCourse + ";" + this.dessert;
    }
    
}
