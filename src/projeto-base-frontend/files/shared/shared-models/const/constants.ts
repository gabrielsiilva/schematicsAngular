declare var require: any;

export const Constantes = {
    versaoBuild: require('../../../../../package.json').version,
    quantidadeMaximaBase: 255,
    regexHora: /^([0-1]\d|2[0-3])([0-5]\d)$/,
    regexDataHora: /^([0-1-2]\d|3[0-1])(0[1-9]|1[0-2])\d{4}$/,
    regexNumerico: /^(\d*)+((\.|\,)?\d{1,4})$/,
    regexEmail: /^([A-Z|a-z|0-9])+[A-Z|a-z|0-9]\@((p)(b)(h)|(e)(d)(u)+\.(p)(b)(h))+\.(g)(o)(v)\.(b)(r)$/,
    regexTexto: /\w|\s/,
    regexTrim: /^[^ ]+[\w\W ]+[^ ]$/,
    regexCaracterEspecial: /^[^!@#$%^&*(),-.?"+:{}|<>/+\s]*$/,
};
