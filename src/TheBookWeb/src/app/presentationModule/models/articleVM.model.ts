import { CommentVM } from './commentVM.model';

export class ArticleVM {
    author: string;
    body: string;
    comments: CommentVM[];
    dateCreation: Date;
    dateModification: Date;
    id: number;
    isDeleted: boolean;
    title: string;
}