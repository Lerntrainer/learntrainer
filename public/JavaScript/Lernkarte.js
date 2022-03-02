class Lernkarte {
    get stelle() {
        return this._stelle;
    }

    set stelle(value) {
        this._stelle = value;
    }

    get antwort() {
        return this._antwort;
    }

    set antwort(value) {
        this._antwort = value;
    }
    get frage() {
        return this._frage;
    }

    set frage(value) {
        this._frage = value;
    }



    constructor(frage,antwort,stelle) {
        this._frage = frage;
        this._antwort = antwort;
        this._stelle = stelle;
    }
    erstelleAnsicht(){
        var ansicht = '<div>' +
            '<h2>' +this._frage+ '</h2>' +
            '<h3 class="antwort" id="' + this._stelle+ '">' +this._antwort+ '</h3>' +
            '<button onclick="getElementById(' + this._stelle+ ').style.visibility = \'visible\'">Anwort zeigen</button>' +
            '<\div>'
    }
}