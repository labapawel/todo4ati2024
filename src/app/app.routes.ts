import { Routes } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { TodoaddComponent } from './todoadd/todoadd.component';

export const routes: Routes = [
    {path: "", component: TodoComponent},
    {path: "add", component: TodoaddComponent}
];
