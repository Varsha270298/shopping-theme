
    import { Component, OnInit,  Input } from '@angular/core';
    
    @Component({
        selector: 'app-toolbar',
        templateUrl: './toolbar.component.html',
        styleUrls: [],
    
    })
    export class Toolbar implements OnInit {
       
        @Input() data?: any;
       
        constructor() {}
    
        ngOnInit() {}
        
    }
    