import Loader from './loader';
import { LoaderOptions } from '../../types';

class AppLoader extends Loader {
    constructor() {
        const baseLink = process.env.API_URL ?? '';
        const options: LoaderOptions = {
            apiKey: process.env.API_KEY ?? '',
        };
        super(baseLink, options);
    }
}

export default AppLoader;