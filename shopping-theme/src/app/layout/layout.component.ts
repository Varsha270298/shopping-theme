
    import { Component, OnInit, ViewEncapsulation } from '@angular/core';
    import { FormBuilder } from '@angular/forms';
    import { FormControl, Validators } from '@angular/forms';
    import { PrimeNGConfig, MenuItem } from 'primeng/api';
    import {Message,MessageService} from 'primeng/api';
    import { Accordion } from 'primeng/accordion';
    import {TreeNode} from 'primeng/api';

    @Component({
        selector: 'app-layout',
        templateUrl: './layout.component.html',
        styleUrls: ['./layout.component.scss'],
        providers: [MessageService, Accordion],
        styles: [],
        encapsulation: ViewEncapsulation.None,
    })
    export class LayoutComponent implements OnInit {
        activeIndex: number = 1;
        items: any[] = [];
        selectValues: any[] = [];
        selectedValue: any = null;
        selectedValueDropdown: any = null;
        date_bind: Date;
        uploadedFiles: any[] = [];
        rangeVal: any = null;

        showLoaderFlag: boolean = true;
        showLoader: boolean = true;
        // chartOptions: { plugins: { legend: { labels: { color: string; }; }; }; };
        chartOptions: any = {};

        
        sidebarData = JSON.parse(JSON.stringify({"data":[{"title":"side1"},{"title":"side2"},{"title":"side3"}]}));
    
        tabsData = JSON.parse(JSON.stringify({"data":[{"title":"Products","value":"products","flag":0},{"title":"Rooms","value":"rooms","flag":0},{"title":"New at Decor","value":"rooms","flag":0},{"title":"Offers","value":"rooms","flag":0}]}));
    
        toolbarData = JSON.parse(JSON.stringify({"name":"tooolbar","data":[{"icon":"","label":"Get 20% off* on deliooooooooooooooooooooooooooooooooo hjdhs  dddddddddddddddddddddddddddddddddd"}]}));
    

        
        
        constructor(private formBuilder: FormBuilder,
            private primengConfig: PrimeNGConfig,
            private messageService: MessageService,
            ) { 
                this.items = [];
                this.date_bind = new Date();
                
            }

        ngOnInit() {
            this.primengConfig.ripple = true;
            
        }

        

        checked1: boolean = false;
        checked2: boolean = true;

        
    }