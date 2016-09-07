import { EventEmitter, OnInit } from '@angular/core';
import { ViewDimensions } from '../common/view-dimensions.helper';
import { BaseChart } from '../common/base-chart.component';
export declare class LineChart2D extends BaseChart implements OnInit {
    dims: ViewDimensions;
    scaleType: string;
    xScale: any;
    yScale: any;
    transform: string;
    clipPath: string;
    colors: Function;
    view: any;
    xDomain: any;
    results: any;
    margin: number[];
    scheme: any;
    customColors: any;
    legend: boolean;
    xAxis: any;
    yAxis: any;
    showXAxisLabel: any;
    showYAxisLabel: any;
    xAxisLabel: any;
    yAxisLabel: any;
    autoScale: any;
    timeline: any;
    clickHandler: EventEmitter<{}>;
    ngOnInit(): void;
    click(data: any): void;
    setColors(): void;
    update(): void;
}