import { SymbolsFactory } from './SymbolsFactory';

export class GroupsFactory {
  private container;

  private _tableGroup;
  private symbolsFactory: SymbolsFactory;

  constructor() {
    this.symbolsFactory = new SymbolsFactory();
  }

  initGroups(container) {
    this.container = container;
    this.symbolsFactory.initSymbols(this.container);
  }

  drawTable(x: number, y: number, chairs: number) {
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

