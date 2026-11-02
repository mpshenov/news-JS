import News from './news/news';
import Sources from './sources/sources';
import { EverythingResponse, SourcesResponse } from '../../types';

export class AppView {
    private news: News;
    private sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    public drawNews(data: EverythingResponse): void {
        this.news.draw(data);
    }

    public drawSources(data: SourcesResponse): void {
        this.sources.draw(data);
    }
}
