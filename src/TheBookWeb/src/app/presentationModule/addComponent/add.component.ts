import { Component, OnInit, OnDestroy } from '@angular/core';
import { ArticleVM } from '../models/articleVM.model';
import { ArticleService } from '../services/article.service';
import { MdlSnackbarService } from 'angular2-mdl';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
    templateUrl: './add.component.html'
})
export class AddComponent implements OnInit, OnDestroy{
    model: ArticleVM = {
        title: '',
        body: ''
    };
    error: string;
    editMode: boolean = false;
    id: number;
    subscription: any;

    constructor(private articleService: ArticleService,
        private mdlSnackbarService: MdlSnackbarService,
        private router: Router,
        private activatedRoute: ActivatedRoute)
    {
        this.editMode = router.isActive("edit", false);
        console.log(activatedRoute);
    };

    onSubmit() {
        if (this.editMode) {
            this.editArticle();
        } else {
            this.saveArticle();
        }
    }

    editArticle() {
        this.articleService.updateArticle(this.id, this.model).subscribe(
            article => {
                this.model = article;
                this.mdlSnackbarService.showSnackbar({
                    message: 'Article updated',
                    timeout: 2000
                });
            },
            error => error = <any>error);

    }

    saveArticle() {
        this.articleService.addArticle(this.model).subscribe(
            article => {
                this.model = article;
                this.mdlSnackbarService.showSnackbar({
                    message: 'Article saved',
                    timeout: 2000
                });
            },
            error => error = <any>error);
    }

    ngOnInit() {
        this.subscription = this.activatedRoute.params.subscribe(params => {
            this.id = +params['id'];
            this.articleService.getArticle(this.id).subscribe(
                article => {
                    this.model = article;
                }
            );
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}