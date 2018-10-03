export class SymbolsFactory {
  private container;

  private _singleTableSymbol;
  private _labelSymbol;
  private _chairSymbol;

  initSymbols(container) {
    this.container = container;
    this._singleTableSymbol = this.singleTableFactory();
    this._labelSymbol = this.labelFactory();
    this._chairSymbol = this.chairFactory();
  }

  /**
   * Singles table factory
   * @returns  SVG Symbol
   */
  private singleTableFactory() {
    const singleTableSymbol = this.container.symbol();

    const tableRect = singleTableSymbol.rect(100, 100);
    tableRect.attr({fill: 'lightgray'});
    tableRect.radius(10);

    return singleTableSymbol;
  }
  get singleTableSymbol() {
    return this._singleTableSymbol;
  }

  /**
   * Labels factory
   * @returns  SVG Symbol
   */
  private labelFactory() {
    const labelSymbol = this.container.symbol();

    const labelRect = labelSymbol.rect(80, 30);
    labelRect.attr({fill: 'blue'});

    return labelSymbol;
  }
  get labelSymbol() {
    return this._labelSymbol;
  }

  /**
   * Chairs factory
   * @returns  SVG Symbol
   */
  private chairFactory() {
    const chairSymbol = this.container.symbol();

    const chairRect = chairSymbol.rect(70, 30);
    chairRect.attr({fill: 'gray'});
    chairRect.radius(5);

    return chairSymbol;
  }
  get chairSymbol() {
    return this._chairSymbol;
  }
}
