
    import { Component, OnInit,  Input } from '@angular/core';
    import { MenuItem } from 'primeng/api';
    import { PrimeNGConfig } from 'primeng/api';
    import {SidebarService} from './sidebar.service'
    
    @Component({
        selector: 'app-sidebar',
        templateUrl: './sidebar.component.html',
        styleUrls: [],
    
    })
    export class Sidebar implements OnInit {
       
        @Input() data?: any;
        visibleSidebar1: any;
        listComnets: any;
        constructor(private primengConfig: PrimeNGConfig,private sbarPostServices: SidebarService) {}
    
        ngOnInit() {
            this.primengConfig.ripple = true;
        }
        
        getclickEvent(link: any) {
            this.sbarPostServices.getPostservices(link).subscribe((gdata: any) => {
                console.warn("gettt",gdata);
                this.listComnets = gdata;
            })
        }
    
        postclickEvent(link: any, data: any) {
            this.sbarPostServices.postPostServices(link, data).subscribe((gdata: any) => {
                console.warn("posttt", gdata);
                this.listComnets = gdata;
            })
        }
    
        putclickEvent(link: any, data: any) {
            this.sbarPostServices.putPostServices(link, data).subscribe((gdata: any) => {
                console.warn(gdata);
                this.listComnets = gdata;
            })
        }
    
        deleteclickEvent(link: any, data: any) {
            this.sbarPostServices.deletePostServices(link, data).subscribe((gdata: any) => {
                console.warn(gdata);
                this.listComnets = gdata;
            })
        }
    }
    