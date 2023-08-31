import { Comment } from './comment';

export interface Post {
  id?: number;
  title: string;
  content: string;
  publishedOn?: string; // You might need to adjust the date format
  updatedOn?: string; // You might need to adjust the date format
  author_id: number | any;
  comments?: Comment[];
}
