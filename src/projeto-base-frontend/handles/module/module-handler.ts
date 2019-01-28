import { Rule, SchematicContext } from "@angular-devkit/schematics";
import { Tree } from "@angular-devkit/schematics/src/tree/interface";
import { getWorkspace, getProjectFromWorkspace, addModuleImportToRootModule } from "schematics-utilities";

/**
 * @author Gabriel Silva
 * @email gabrielp.siilva@gmail.com
 * @version 0.0.1
 * @description Método responsável por receber o array com os módulos a serem importados no módulo raiz;
 */
export function addModuleToImports(): Rule {
    return (host: Tree, context: SchematicContext) => {
        const workspace = getWorkspace(host);
        const project = getProjectFromWorkspace(workspace, Object.keys(workspace['projects'])[0]);
        const modules = [
            { name: 'SharedPipesModule', path: './shared/shared-pipes/shared-pipes.module' },
            { name: 'HttpClientModule', path: '@angular/common/http' },
            { name: 'NgxSpinnerModule', path: 'ngx-spinner' },
            { name: 'PrincipalModule', path: './modules/principal/principal.module' },
            { name: 'ValidacaoFormularioModule.forRoot()', path: '@shared/modules/modules/validacao-formulario/validacao-formulario.module' },
            { name: 'CoreModule.forRoot()', path: './core/core.module' },
            { name: 'SharedComponentsModule', path: '@shared/components/shared-components.module' },
            { name: 'SharedDirectivesModule', path: './shared/shared-directives/shared-directives.module' }
        ];

        modules.forEach(element => {
            addModuleImportToRootModule(host, element.name, element.path, project);
            context.logger.log('info', `✅️ "${element.name}" foi importado`);
        });

        return host;
    };
}