"use strict";
let URLapi = "./assets/json/Abbigliamento.json";
let promise = fetch(URLapi).then((negozio) => negozio.json());
promise.then((negozio) => {
    console.log(negozio);
    let capi = [];
    for (let i = 0; i < negozio.length; i++) {
        capi[negozio[i].capo] = new CapiAbbigliamento(negozio[i].id, negozio[i].codprod, negozio[i].collezione, negozio[i].capo, negozio[i].modello, negozio[i].quantita, negozio[i].colore, negozio[i].prezzoivaesclusa, negozio[i].prezzoivainclusa, negozio[i].disponibile, negozio[i].saldo);
    }
    console.log(capi);
});
class CapiAbbigliamento {
    constructor(id, codprod, collezione, capo, modello, quantita, colore, prezzoivaesclusa, prezzoivainclusa, disponibile, saldo) {
        this.id = id;
        this.codprod = codprod;
        this.collezione = collezione;
        this.capo = capo;
        this.modello = modello;
        this.quantita = quantita;
        this.colore = colore;
        this.prezzoivaesclusa = prezzoivaesclusa;
        this.prezzoivainclusa = prezzoivainclusa;
        this.disponibile = disponibile;
        this.saldo = saldo;
    }
    getSaldoCapo() {
        return (this.saldo -= this.prezzoivainclusa);
    }
    getAcquistoCapo() {
        return (this.saldo += this.prezzoivainclusa);
    }
}
