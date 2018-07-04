import { NgModule } from "@angular/core";
import { Routes, RouterModule, Router } from '@angular/router'
import { FormularioComponent } from "./formulario/formulario.component";
import { HivComponent } from "./formulario/hiv/hiv.component";

const routes: Routes = [
    { path: 'formulario', component: FormularioComponent },
    { path: 'formulario/hiv', component: HivComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}