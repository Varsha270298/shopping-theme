import { Sidebar } from './sidebar/sidebar.component';
import { Tabs } from './tabs/tabs.component';
import { Toolbar } from './toolbar/toolbar.component';

    
    import { NgModule, CUSTOM_ELEMENTS_SCHEMA ,NO_ERRORS_SCHEMA} from '@angular/core';
    
  
      import {RadioButtonModule} from 'primeng/radiobutton';
      import {ButtonModule} from 'primeng/button';
      import {CheckboxModule} from 'primeng/checkbox';
      import { FormsModule, ReactiveFormsModule } from '@angular/forms';
      import {CalendarModule} from 'primeng/calendar';
      import {PasswordModule} from 'primeng/password';
      import {DropdownModule} from 'primeng/dropdown';
      import {ToggleButtonModule} from 'primeng/togglebutton';
      import {MessagesModule} from 'primeng/messages';
      import {MessageModule} from 'primeng/message';
      import {InputTextModule} from 'primeng/inputtext';
      import {RippleModule} from 'primeng/ripple';
      import { TabViewModule } from 'primeng/tabview';
      import { StepsModule } from 'primeng/steps';
      import { ToastModule } from 'primeng/toast';
      import {TableModule} from 'primeng/table';
      import {AccordionModule} from 'primeng/accordion';
      import {FileUploadModule} from 'primeng/fileupload';
      import { CommonModule } from '@angular/common';
      import { AngularSvgIconModule } from 'angular-svg-icon';
      import { ChartModule } from 'primeng/chart';
      import {HttpClientModule} from '@angular/common/http';
      import {InputNumberModule} from 'primeng/inputnumber';
      import {SliderModule} from 'primeng/slider';
      import {CardModule} from 'primeng/card';
      import {BadgeModule} from 'primeng/badge';
      import {AutoCompleteModule} from 'primeng/autocomplete';
      import {MegaMenuModule} from 'primeng/megamenu';
      import {MenuModule} from 'primeng/menu';
      import {MenubarModule} from 'primeng/menubar';
      import {InputMaskModule} from 'primeng/inputmask';
      import {KnobModule} from 'primeng/knob';
      import {RatingModule} from 'primeng/rating';
      import {ColorPickerModule} from 'primeng/colorpicker';
      import {InputSwitchModule} from 'primeng/inputswitch';
      import {MultiSelectModule} from 'primeng/multiselect';
      import { PanelMenuModule } from 'primeng/panelmenu';
      import { SlideMenuModule } from 'primeng/slidemenu';
      import {CascadeSelectModule} from 'primeng/cascadeselect';
      import {EditorModule} from 'primeng/editor';
      import {TimelineModule} from 'primeng/timeline';
      import {PaginatorModule} from 'primeng/paginator';
      import {ToolbarModule} from 'primeng/toolbar';
      import {DataViewModule} from 'primeng/dataview';
      import { FullCalendarModule } from '@fullcalendar/angular';
      import dayGridPlugin from '@fullcalendar/daygrid';
      import timeGridPlugin from '@fullcalendar/timegrid';
      import interactionPlugin from '@fullcalendar/interaction';
      FullCalendarModule.registerPlugins([
        dayGridPlugin,
        timeGridPlugin,
        interactionPlugin,
      ]);
      import {BreadcrumbModule} from 'primeng/breadcrumb';
      import {SidebarModule} from 'primeng/sidebar';
      import {TooltipModule} from 'primeng/tooltip';
      import {OverlayPanelModule} from 'primeng/overlaypanel';
      import { MessageService } from 'primeng/api';
      import {PickListModule} from 'primeng/picklist';
      import {ContextMenuModule} from 'primeng/contextmenu';
      import {TreeModule} from 'primeng/tree'; 
      import {KeyFilterModule} from 'primeng/keyfilter';
      import {ConfirmationService} from 'primeng/api';
      import { ScrollPanelModule} from 'primeng/scrollpanel';
      import {PanelModule} from 'primeng/panel';
      import {DialogModule} from 'primeng/dialog';
      import {ConfirmDialogModule} from 'primeng/confirmdialog';
      import {ConfirmPopupModule} from 'primeng/confirmpopup';
      import {DividerModule} from 'primeng/divider';
      import {TreeSelectModule} from 'primeng/treeselect';
      import { DynamicHooksModule, HookParserEntry } from 'ngx-dynamic-hooks';
      import {OrganizationChartModule} from 'primeng/organizationchart';
      // import {TreeNode} from 'primeng/api';
    
    const componentParsers: Array<HookParserEntry> = [
    
    
       
      ];
      
     

    @NgModule({
    declarations: [
    Sidebar,
Tabs,
Toolbar,
 
    
    
        
        
    ],
    imports: [
        
      //BrowserModule,
      //BrowserAnimationsModule,
      //AppRoutingModule,
      RadioButtonModule,
      ButtonModule,
      PasswordModule,
      CheckboxModule,
      FormsModule,
      CalendarModule,
      DropdownModule,
      ToggleButtonModule,
      ReactiveFormsModule,
      MessagesModule,
      MessageModule,
      InputTextModule,
      RippleModule,
      TabViewModule,
      StepsModule,
      ToastModule,
      TableModule,
      AccordionModule,
      CommonModule,
      AngularSvgIconModule,
      ChartModule,
      InputNumberModule,
      HttpClientModule,
      FileUploadModule,
      SliderModule,
      CardModule,
      BadgeModule,
      AutoCompleteModule,
      MegaMenuModule,
      MenuModule,
      MenubarModule,
      InputMaskModule,
      KnobModule,
      RatingModule,
      ColorPickerModule,
      InputSwitchModule,
      MultiSelectModule,
      PanelMenuModule,
      SlideMenuModule,
      CascadeSelectModule,
      EditorModule,
      TimelineModule,
      PaginatorModule,
      FullCalendarModule,
      ToolbarModule,
      DataViewModule,
      DialogModule,
      ConfirmPopupModule,
      ConfirmDialogModule,
      BreadcrumbModule,
      SidebarModule,
      TooltipModule,
      OverlayPanelModule,
      BreadcrumbModule,
      SidebarModule,
      TooltipModule,
      PickListModule,
      ContextMenuModule,
      TreeModule,
      KeyFilterModule,
      ScrollPanelModule,
      PanelModule,
      DividerModule,
      TreeSelectModule,
      OrganizationChartModule,
      // TreeNode,
      DynamicHooksModule,
      DynamicHooksModule.forRoot({
          globalParsers: componentParsers
        })
    
    ],
    providers: [
        ConfirmationService,MessageService 
    ],
    exports: [
    Sidebar,
Tabs,
Toolbar,

    
        
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    })
    export class CommonComponentsModule { }
    
        