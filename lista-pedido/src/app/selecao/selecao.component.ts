import { Component, Input, OnInit } from '@angular/core';
import { Tamanho, Acrecimos  } from './selectItens'

@Component({
  selector: 'app-selecao',
  templateUrl: './selecao.component.html',
  styleUrls: ['./selecao.component.css']
})
export class SelecaoComponent implements OnInit {

  title: string = 'Monte seu açai';
  titulo_tamanho: string = 'Tamanho';
  titulo_acrecimos: string = 'Acrécimos';

  // @Input() selecionado: number = 0;
  selecionado: number = 0;

  quantidades: Tamanho[] = [
    {volume: '300ml', done: false},
    {volume: '500ml', done: false}
  ];

  acrecimos: Acrecimos[] = [
    {sabor: 'Leite condensado', done: false},
    {sabor: 'Banana', done: false},
    {sabor: 'Granola', done: false},
    {sabor: 'Morango', done: false},
    {sabor: 'Leite em pó', done: false},
    {sabor: 'Côco', done: false},
    {sabor: 'Castanha de caju', done: false}
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onClik(){
    this.selecionado = this.selecionado + 1
    // console.log();
    
  }

}
