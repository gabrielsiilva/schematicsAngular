import { classify } from '@angular-devkit/core/src/utils/strings';
import { apply, branchAndMerge, chain, filter, mergeWith, move, noop, Rule, template, url } from '@angular-devkit/schematics';
import { addPackageJsonDependencies, installPackageJsonDependencies } from './handles/package/package-handler';
import { schemaOptions } from './schema';
import { addModuleToImports } from './handles/module/module-handler';
import { AddFolderShortcuts } from './handles/tsconfig/tsconfig-handler';

const stringsUtils = { classify }

export default function (options: schemaOptions): Rule {
  const templateSource = apply(url('./files'), [
    options.spec ? noop() : filter(path => !path.endsWith('.spec.ts')),
    template({ ...stringsUtils, ...options }),
    move('src/app'),
  ]);

  return chain([
    branchAndMerge(chain([
      addPackageJsonDependencies(),
      installPackageJsonDependencies(),
      addModuleToImports(),
      AddFolderShortcuts(),
      mergeWith(templateSource)
    ])),
  ]);

}
