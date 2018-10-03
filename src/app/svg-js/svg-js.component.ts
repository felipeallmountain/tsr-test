import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as SVG from 'svg.js';
import { GroupsFactory } from './utils/GroupsFactory';

@Component({
  selector: 'xen-svg-js',
  templateUrl: './svg-js.component.html',
  styleUrls: ['./svg-js.component.scss']
})
export class SvgJsComponent implements OnInit, AfterViewInit {
  container;
  groupsFactory: GroupsFactory;

  constructor() {
    this.groupsFactory = new GroupsFactory();
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.container = SVG('svg-js').size(500, 400);
    this.groupsFactory.initGroups(this.container);
    this.defineTables();
  }

  defineTables() {
    const table1 = this.groupsFactory.drawTable(50, 50, 3);
    const table2 = this.groupsFactory.drawTable(200, 200, 4);
    const table3 = this.groupsFactory.drawTable(50, 300, 4);
  }
}
