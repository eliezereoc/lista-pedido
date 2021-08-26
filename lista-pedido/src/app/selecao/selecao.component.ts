import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-selecao',
  templateUrl: './selecao.component.html',
  styleUrls: ['./selecao.component.css']
})
export class SelecaoComponent implements OnInit {

  @Input() titulo: string = '';
  @Input() opcoes: string[] = [];
  @Input() escolhaAte: number = 1;
  opcoesEscolhida: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  marcaOuDesmarcaOpcao(opcao: string) {
    if (this.escolhaAte > 1) {
      const idx = this.opcoesEscolhida.indexOf(opcao);
      if (idx === -1) {
        this.opcoesEscolhida.push(opcao);
      } else {
        this.opcoesEscolhida.splice(idx, 1);
      }
    } else {
      this.opcoesEscolhida = [opcao];
    }
  }

  estaDesabilitada(opcao: string){
    return this.escolhaAte > 1 && 
      this.opcoesEscolhida.indexOf(opcao) === -1 && 
      this.opcoesEscolhida.length >= this.escolhaAte;
  }

}
