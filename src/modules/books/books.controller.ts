import { Controller } from '@nestjs/common';

import { BooksService } from './books.service';

@Controller('books')
export class BookControllers {
  constructor(private readonly booksService: BooksService) {}
}
