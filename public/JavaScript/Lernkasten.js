class Lernkasten {

    get lernkastenElement() {
        return this._lernkastenElement;
    }

    set lernkastenElement(value) {
        this._lernkastenElement = value;
    }
    get lernkasten() {
        return this._lernkasten;
    }

    set lernkasten(value) {
        this._lernkasten = value;
    }
    constructor(lernkasten) {

        this._lernkasten = lernkasten;
        this._lernkastenElement = $(".lernkasten");
    }

    erstelleAnsicht() {
        console.info(this._lernkasten);
        for (var i = 0; i <this._lernkasten.length; i++) {
            var newP = document.createElement("p");
            var button =    $(document.createElement('button')).prop({
                type: 'button',
                innerHTML: this._lernkasten[i],
                class: 'ui-button ui-corner-all ui-widget',
                click: function () { }
            });
            console.log(button[0]);
            newP.append(button[0]);
            console.log(newP);
            this._lernkastenElement.append(newP);
        }
    }
}