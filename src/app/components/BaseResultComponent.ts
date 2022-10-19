import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Analysis } from "../models/analysis";
import { Person } from "../models/person";

@Component( {
    template: ''
})
export abstract class BaseResultComponent {
    
    @Input("people") people:Person[] = [];
    @Input("analysisList") analysisList: Analysis[] = [];
    @Output("deleteIndex") deleteIndex = new EventEmitter<number>();
    
}