import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from '../layout/default/default.component';
import { FullscreenComponent } from '../layout/fullscreen/fullscreen.component';

const routes: Routes = [
    { path: '', redirectTo: 'default', pathMatch: 'full' },
    /**默认布局 */
    {
        path: 'default',
        component: DefaultComponent,
        children: [
            { path: '', redirectTo: 'index', pathMatch: 'full' },
            { path: 'index', loadChildren: './index/index.module#IndexModule' },

        ]
    },
    /**全屏布局 */
    {
        path: 'fullscreen',
        component: FullscreenComponent,
        children: [
            { path: '', redirectTo: 'screen', pathMatch: 'full' },
            { path: 'screen', loadChildren: './screen/screen.module#ScreenModule' }
        ]
    }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class RouteRoutingModule { }