// Core modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Third-party modules
import { Angular2FontawesomeModule } from 'angular2-fontawesome';
import { LocalStorageModule } from 'angular-2-local-storage';

// This module
import { SidebarFilesComponent } from './sidebar-files.component';


@NgModule({
    imports: [
        CommonModule,
        Angular2FontawesomeModule,
        LocalStorageModule.withConfig({
            prefix: 'zephyrjs-ide',
            storageType: 'localStorage'
        })
    ],
    declarations: [SidebarFilesComponent],
    exports: [SidebarFilesComponent]
})
export class SidebarFilesModule { }
