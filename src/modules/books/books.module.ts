import { Module } from "@nestjs/common";
import { BooksService } from "./books.service";

@Module({
    providers: [BooksService],
    controllers: [],
})
export class BooksModule {}