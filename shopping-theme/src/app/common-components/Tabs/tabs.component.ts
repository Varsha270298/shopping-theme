
import { Component, OnInit,  Input } from '@angular/core';
import { TabService } from './tabs.service';

@Component({
    selector: 'app-tabs',
    templateUrl: './tabs.component.html',
    styleUrls: [],
})
export class Tabs implements OnInit {
   
    @Input() data?: any;
    listComnets: any;
    constructor(private tabPostServices: TabService ) { 
              
        }

    ngOnInit() {  
        let Arrdata : any = Object.values( this.data)
        let adata = Arrdata[0]
        for(let i = 0; i<adata.length ; i++){  
            if(adata[i].flag){      
                if(adata[i].value){
                    adata[i].value = `<app-${adata[i].value}></app-${adata[i].value}>`
                }            
            }
        }
    }

    clicktab(event:any){
        let Arrdata : any = Object.values( this.data)
        let adata = Arrdata[0]
        console.log(event);
        for (let i=0 ; i<adata.length; i++){
            if(i === event.index){
                if(adata[i].apibindtoggle === true && adata[i].api_method ==="GET"){
                    this.getclickEvent(adata[i].apilink);   
                }
                if(adata[i].apibindtoggle === true && adata[i].api_method ==="POST"){
                    this.postclickEvent(adata[i].apilink,adata[i].bodyofapi);   
                }
                if(adata[i].apibindtoggle === true && adata[i].api_method ==="PUT"){
                    this.putclickEvent(adata[i].apilink,adata[i].bodyofapi);   
                }
                if(adata[i].apibindtoggle === true && adata[i].api_method ==="DELETE"){
                    this.deleteclickEvent(adata[i].apilink,adata[i].bodyofapi);   
                }
            }
        }
    }
   
    getclickEvent(link: any) {
        this.tabPostServices.getPostservices(link).subscribe((gdata: any) => {
            console.warn("gettt",gdata);
            this.listComnets = gdata;
        })
    }

    postclickEvent(link: any, data: any) {
        this.tabPostServices.postPostServices(link, data).subscribe((gdata: any) => {
            console.warn("posttt", gdata);
            this.listComnets = gdata;
        })
    }

    putclickEvent(link: any, data: any) {
        this.tabPostServices.putPostServices(link, data).subscribe((gdata: any) => {
            console.warn(gdata);
            this.listComnets = gdata;
        })
    }

    deleteclickEvent(link: any, data: any) {
        this.tabPostServices.deletePostServices(link, data).subscribe((gdata: any) => {
            console.warn(gdata);
            this.listComnets = gdata;
        })
    }
   
    
}