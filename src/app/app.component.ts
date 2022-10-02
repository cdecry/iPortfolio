import { Component, HostListener } from '@angular/core';
import { ChildrenOutletContexts, Router, RouterOutlet } from '@angular/router';
import { fader } from 'src/app/route-animations';
import { trigger } from '@angular/animations';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    animations: [
    fader,
    ]
})

export class AppComponent {
    constructor(private router: Router) {}

    title = 'crystal huang';

    @HostListener('window:keyup', ['$event'])
    keyEvent(event: KeyboardEvent) {
        if(event.key  == 'ArrowLeft'){
        this.router.navigate(['/home']);
        }
    }

    prepareRoute(outlet: RouterOutlet) {
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
    }

}
