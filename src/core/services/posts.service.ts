import { inject, Injectable } from '@angular/core';
import { ApiService } from '../../shared/services/api-methods.service';
import { shareReplay, Observable, tap } from 'rxjs';
import { IPost } from './../../shared/models/Post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private readonly apiService = inject(ApiService);

  private readonly posts$: Observable<IPost[]> = this.apiService.get<IPost[]>('posts').pipe(
    shareReplay(1)
  );

  getAllPosts(): Observable<IPost[]> {
    return this.posts$;
  }
}
