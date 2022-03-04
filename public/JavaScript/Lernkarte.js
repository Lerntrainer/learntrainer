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
    erstelleAnsicht(lernkarten){
        var ansicht = '<div>' +
            '<h2>' +this._frage+ '</h2>' +
            '<h3 class="antwort" id="answer">' +this._antwort+ '</h3>' +
            '<button onclick="showAnswer()" id="btn_showAnswer">Anwort zeigen</button>' +
            '<button onclick="rightAnswer()" id="btn_rightAnswer" style="visibility:hidden">richtige Antwort</button>' +
            '<button onclick="falseAnswer()" id="btn_falseAnswer" style="visibility:hidden">falsche Antwort</button>' +
            '<div id="div_lernkarten" lernkarten='+lernkarten+' style="visibility:hidden"></div>' +
            '<\div>'
        return ansicht;
    }
}