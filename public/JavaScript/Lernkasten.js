class Lernkasten {
    static lernkarten

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
    get lernkarten() {
        return this._lernkarten;
    }
    set lernkarten(value) {
        this._lernkarten = value;
    }
    constructor(lernkasten) {

        this._lernkasten = lernkasten;
        this._lernkastenElement = $(".lernkasten");
    }
    static getLernkarten(){
        return this.lernkarten;
    }
    erstelleAnsicht() {
        for (var i = 0; i <this._lernkasten.length; i++) {
            var newP = document.createElement("p");
            var button =    $(document.createElement('button')).prop({
                type: 'button',
                innerHTML: this._lernkasten[i],
                class: 'ui-button ui-corner-all ui-widget',
            });
            var Lernkasten = this;
            button[0].addEventListener("click",function(){
                $.get({
                    url: "learntrainer/public/controller.php",
                    data: {action:"getLernkasten",
                            filename:button[0].innerHTML},
                    success: function (data) {
                        console.info(data);
                        var daten = JSON.parse(data);
                        console.log(daten.result);
                        var lernkarte = [];
                        for (var j = 1; j < daten.result.length; j++) {
                           lernkarte[j] = new Lernkarte(daten.result[j]['Frage'],daten.result[j]['Antwort'],j);
                        }
                        console.info(lernkarte);
                        Lernkasten.lernkarten = lernkarte;
                        $('<div />').html(lernkarte[1].erstelleAnsicht(lernkarte)).dialog({
                            minHeight:600,
                            minWidth:600,
                            resizable: true,
                            draggable:true,
                            title:button[0].innerHTML,
                        });
                    }
                });


            })
            newP.append(button[0]);
            this._lernkastenElement.append(newP);
        }
    }
}