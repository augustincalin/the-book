import { Component, OnInit } from '@angular/core';
import { MdlSnackbarService } from 'angular2-mdl';
import { ActivatedRoute, Router } from '@angular/router';
import * as _ from 'lodash';

import { ArticleService } from '../services/article.service';
import { CommentService } from '../services/comment.service';
import { ArticleVM } from '../models/articleVM.model';
import { CommentVM } from '../models/commentVM.model';


@Component({
    templateUrl: './view.component.html'
})
export class ViewComponent implements OnInit {
    model: ArticleVM;
    id: number;
    myMessage: string = '';
    error: string = '';
    likes: number = 0;
    dislikes: number = 0;
    constructor(private articleService: ArticleService,
        private activatedRoute: ActivatedRoute,
        private commentService: CommentService,
        private mdlSnackbarService: MdlSnackbarService,
        private router:Router) { };

    articleOk() {
        let comment: CommentVM = new CommentVM();
        comment.body = this.myMessage;
        comment.type = 1;
        comment.articleId = this.id;
        comment.author = 'CURRENT_USER';
        

        this.commentService.addComment(comment).subscribe(
            comment => {
                this.model.comments.push(comment);
                this.mdlSnackbarService.showSnackbar({
                    message: 'Comment saved',
                    timeout: 2000
                });
                this.myMessage = '';
                this.computeLikes();
            },
            error => this.error = <any>error
        );
        }

    gotoEdit() {
        this.router.navigate(['/edit', this.id]);
    }

    articleNotOk() {
        let comment: CommentVM = new CommentVM();
        comment.body = this.myMessage;
        comment.type = 2;
        comment.articleId = this.id;
        comment.author = 'CURRENT_USER';


        this.commentService.addComment(comment).subscribe(
            comment => {
                this.model.comments.push(comment);
                this.mdlSnackbarService.showSnackbar({
                    message: 'Comment saved',
                    timeout: 2000
                });
                this.myMessage = '';
                this.computeLikes();
            },
            error => this.error = <any>error
        );
    }

    computeLikes() {
        let likes: number = 0;
        let dislikes: number = 0;
        _.forEach(this.model.comments, function (value: CommentVM) {
            if (value.type == 1) {
                likes++;
            } else {
                dislikes++;
            }
        });
        this.likes = likes;
        this.dislikes = dislikes;
    }

    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            this.id = +params['id'];
            this.articleService.getArticle(this.id).subscribe(
                article => {
                    this.model = article;
                    this.computeLikes();
                }
            );
        });
    }
}