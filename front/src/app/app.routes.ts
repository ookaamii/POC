import { Routes } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { HomeComponent } from './home/home.component';
import { ServiceClientComponent } from './service-client/service-client.component';

export const routes: Routes = [
    {
        path: 'chat',
        component: ChatComponent,
        title: 'Chat'
    },
    {
        path: '',
        component: HomeComponent,
        title: 'Chat'
    },
    {
        path: 'chat/service-client',
        component: ServiceClientComponent,
        title: 'Chat'
    }
];
