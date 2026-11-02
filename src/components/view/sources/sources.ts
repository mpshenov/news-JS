import './sources.css';
import { SourcesResponse } from '../../../types';

class Sources {
    public draw(data: SourcesResponse): void {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement | null;

        if (!sourceItemTemp) return;

        data.sources.forEach((item) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as DocumentFragment;

            const nameEl = sourceClone.querySelector('.source__item-name');
            if (nameEl) nameEl.textContent = item.name;

            const itemEl = sourceClone.querySelector('.source__item');
            if (itemEl) itemEl.setAttribute('data-source-id', item.id ?? '');

            fragment.append(sourceClone);
        });

        const sourcesEl = document.querySelector('.sources');
        if (sourcesEl) sourcesEl.append(fragment);
    }
}

export default Sources;