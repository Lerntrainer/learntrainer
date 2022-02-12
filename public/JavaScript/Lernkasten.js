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
        for (var i = 0; i <this._lernkasten.length; i++) {
            var newP = document.createElement("p");
            newP.button({
                label: this._lernkasten[i],
                click:function(t){

                }
            });
        }
    }
}