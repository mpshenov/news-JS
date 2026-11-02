export interface Source {
    id: string | null;
    name: string;
}

export interface Article {
    source: Source;
    author: string | null;
    title: string;
    description: string | null;
    url: string;
    urlToImage: string | null;
    publishedAt: string;
    content: string | null;
}

export interface EverythingResponse {
    status: string;
    totalResults: number;
    articles: Article[];
}

export interface SourcesResponse {
    status: string;
    sources: Source[];
}

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

export interface LoaderOptions {
    [key: string]: string | number | undefined;
}

export interface GetRespParams {
    endpoint: string;
    options?: LoaderOptions;
}

export type Callback<T> = (data: T) => void;