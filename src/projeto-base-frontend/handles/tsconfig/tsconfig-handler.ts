import { Rule, Tree, SchematicContext } from "@angular-devkit/schematics";
import { PathFragment } from "@angular-devkit/core";
import { Tsconfig } from "src/projeto-base-frontend/models/interface/tsconfig.model";
import { PathConfiguration } from "./path-configuration";

/**
 * @author Gabriel Silva
 * @email gabrielp.siilva@gmail.com
 * @version 0.0.1
 * @description método responsável por adicionar os aliases ao tsconfig.json;
 */
export function AddFolderShortcuts(): Rule {
    return (tree: Tree, context: SchematicContext) => {
  
      // Procura o arquivo tsconfig.json no arquivos;
      const tsConfigFile = tree.root.subfiles.find((value: PathFragment) => {
        return value === 'tsconfig.json'
      });
  
      // Caso o tsconfig.json não seja encontrado;
      if (!tsConfigFile) {
        context.logger.warn(`tsconfig.json não foi encontrado!!! 😲`);
        return tree;
      }
  
      const tsConfigContent = tree.read(tree.root.path + '/' + tsConfigFile);
      const tsConfigData: Tsconfig = JSON.parse(tsConfigContent ? tsConfigContent.toString() : 'void');
  
      // Instância do objeto contendo o array de aliases a ser adicionado;
      var pathsToAdd = new PathConfiguration();
  
      tsConfigData.compilerOptions.paths = {};

      //Percorre o array de aliases e adicionando cada um ao tsconfig.json;
      pathsToAdd.paths.forEach(path => {
        context.logger.info(`Adicionando o import ${path.shortcut} relativo ao path ${path.relativePath}`);
        tsConfigData.compilerOptions.paths[path.shortcut] = [path.relativePath];
      });
  
      //sobrescreve o arquivo com os novos aliases adicionados;
      tree.overwrite(tsConfigFile, JSON.stringify(tsConfigData, null, ' '));
      return tree;
    };
  }
  