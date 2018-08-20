import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';

const appRoutes: Routes = [ 
    {
        path: '',
        component: ArticlesComponent
    },
    {
        path: ':id',
        component: ArticleDetailComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);