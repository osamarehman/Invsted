import { User } from "@/models/user";

export interface Comment {
    _id: string,
    blogPostId: string,
    parentCommentId?: string,
    author: User,
    text: string,
    createdAt: string,
    updatedAt: string,
    repliesCount?: number,
}

export interface CommentsPage {
    comments: Comment[],
    endOfPaginationReached: boolean,
}