import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class BooksService {
  constructor(@Inject()) {}

  public getBooks() {}

  public getAuthors() {}
}
