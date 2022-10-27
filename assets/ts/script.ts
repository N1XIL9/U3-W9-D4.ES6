let URLapi = "./assets/json/Abbigliamento.json";
let promise = fetch(URLapi).then((negozio) => negozio.json());
promise.then((negozio) => {
  console.log(negozio);
  let capi: any = [];
  for (let i = 0; i < negozio.length; i++) {
    capi[negozio[i].capo] = new CapiAbbigliamento(negozio[i].id, negozio[i].codprod, negozio[i].collezione, negozio[i].capo, negozio[i].modello, negozio[i].quantita, negozio[i].colore, negozio[i].prezzoivaesclusa, negozio[i].prezzoivainclusa, negozio[i].disponibile, negozio[i].saldo);
  }
  console.log(capi);
});

class CapiAbbigliamento {
  id: number;
  codprod: number;
  collezione: string;
  capo: string;
  modello: number;
  quantita: number;
  colore: string;
  prezzoivaesclusa: number;
  prezzoivainclusa: number;
  disponibile: string;
  saldo: number;

  constructor(id: number, codprod: number, collezione: string, capo: string, modello: number, quantita: number, colore: string, prezzoivaesclusa: number, prezzoivainclusa: number, disponibile: string, saldo: number) {
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
  getSaldoCapo(): number {
    return (this.saldo -= this.prezzoivainclusa);
  }

  getAcquistoCapo(): number {
    return (this.saldo += this.prezzoivainclusa);
  }
}
