import { Rule, SchematicContext } from "@angular-devkit/schematics";
import { Tree } from "@angular-devkit/schematics/src/tree/interface";
import { NodeDependency, NodeDependencyType, addPackageJsonDependency } from "schematics-utilities";
import { NodePackageInstallTask } from "@angular-devkit/schematics/tasks";

/**
 * @author Gabriel Silva
 * @email gabrielp.siilva@gmail.com
 * @version 0.0.1
 * @description Função responsável por receber uma lista de dependências a serem adicionadas nas dependências do projeto.
 */
export function addPackageJsonDependencies(): Rule {
    return (host: Tree, context: SchematicContext) => {
        const dependencies: NodeDependency[] = [
            { type: NodeDependencyType.Default, version: '3.1.3', name: 'ngx-bootstrap' },
            { type: NodeDependencyType.Default, version: '7.3.3', name: 'ngx-mask' },
            { type: NodeDependencyType.Default, version: '6.1.2', name: 'ngx-spinner' },
            { type: NodeDependencyType.Default, version: '1.14.3', name: 'popper.js' },
            { type: NodeDependencyType.Default, version: '0.3.0', name: 'string-mask' },
            { type: NodeDependencyType.Default, version: '0.14.1', name: 'xlsx' },
            { type: NodeDependencyType.Default, version: '2.0.0', name: 'file-saver' },
            { type: NodeDependencyType.Default, version: '3.3.1', name: 'jquery' },
            { type: NodeDependencyType.Default, version: '5.5.0', name: '@fortawesome/fontawesome-free' },
            { type: NodeDependencyType.Default, version: '7.0.0', name: '@angular/http' },
        ];

        dependencies.forEach(dependency => {
            addPackageJsonDependency(host, dependency);
            context.logger.log('info', `✅️ Adicionando "${dependency.name}" nas ${dependency.type}`);
        });

        return host;
    };
}

// Função responsável por instalar as dependências através de um gerenciador de pacotes;
export function installPackageJsonDependencies(): Rule {
    return (host: Tree, context: SchematicContext) => {
        context.addTask(new NodePackageInstallTask());
        context.logger.log('info', `🔍 Instalando packages...`);
        return host;
    };
}