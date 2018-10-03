import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as SVG from 'svg.js';
import { SymbolsFactory } from './utils/SymbolsFactory';

@Component({
  selector: 'xen-svg-js',
  templateUrl: './svg-js.component.html',
  styleUrls: ['./svg-js.component.scss']
})
export class SvgJsComponent implements OnInit, AfterViewInit {
  container;
  symbolsFactory;

  constructor() {
    this.symbolsFactory = new SymbolsFactory();
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.container = SVG('svg-js').size(500, 400);
    this.symbolsFactory.initSymbols(this.container);
    this.defineTables();
  }

  defineTables() {
    const table1 = this.tableGroup(50, 50, 3);
    const table2 = this.tableGroup(200, 200, 4);
  }

  tableGroup(x: number, y: number, chairs: number) {
    const group = this.container.group();
    group.attr({
      transform: `translate(${x}, ${y})`
    });
    group.use(this.symbolsFactory.chairSymbol).move(15, -20);
    group.use(this.symbolsFactory.singleTableSymbol);
    group.use(this.symbolsFactory.labelSymbol).move(10, 30);

    return group;
  }
}
