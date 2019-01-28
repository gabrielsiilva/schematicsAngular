import Path from '../../models/interface/path.model';

/**
 * @author Gabriel Silva
 * @email gabrielp.siilva@gmail.com
 * @version 0.0.1
 * @description Classe responsável por criar os aliases que irão ser adicionados no tsconfig.json;
 */
export class PathConfiguration {
    public paths = new Array<Path>();
    public itemsForSearchReplace: Array<Path>;

    constructor() {
        this.paths.push(
            {
                shortcut: '@shared/models/*',
                relativePath: 'src/app/shared/shared-models/*'
            },
            {
                shortcut: '@shared/components/*',
                relativePath: 'src/app/shared/shared-components/*'
            },
            {
                shortcut: '@environments/*',
                relativePath: 'src/environments/*'
            },
            {
                shortcut: '@shared/modules/*',
                relativePath: 'src/app/shared/shared-modules/*'
            }
        );

        this.fillItemsForSearchReplace();
    }

    private fillItemsForSearchReplace(): void {
        this.itemsForSearchReplace = this.paths.map(item => {
            return {
                shortcut: item.shortcut.replace('*', ''),
                relativePath: item.relativePath.replace('*', '')
            };
        });
    }
}