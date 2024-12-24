import { AppComponent } from "./app.component";
import { HttpClient } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { NgModule } from "@angular/core";
import { SidebareComponent } from "./sidebare/sidebare.component";
import { BrowserModule } from "@angular/platform-browser";
import { provideHttpClient,withInterceptorsFromDi} from "@angular/common/http";
import { ClientComponent } from "./client/client.component";
import { AchatComponent } from "./achat/achat.component";
import { RHComponent } from "./rh/rh.component";
import { PartenariatComponent } from "./partenariat/partenariat.component";
import { PretComponent } from "./pret/pret.component";


@NgModule({
    declarations:[
        AppComponent,
        SidebareComponent,
        ClientComponent,
        RHComponent,
        AchatComponent,
        PartenariatComponent,
        PretComponent
        
    ],
    imports:[
        BrowserModule,
        NgModule,
        HttpClient,
        FormsModule,
        CommonModule
    ],
    providers:[provideHttpClient()],
    bootstrap:[AppComponent]
})
export class AppModule{}