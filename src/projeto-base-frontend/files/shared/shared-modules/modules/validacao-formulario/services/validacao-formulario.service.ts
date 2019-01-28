import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MensagemValidacaoEnum } from '../model/mensagem.validacao.enum';
import { environment } from 'src/environments/environment';

/**
 * Overwrite dos eventos de um FormControl, para atribuir a variavel nativeElements para obter a referencia do input utilizado.
 */

@Injectable()
export class ValidacaoFormularioService {


    /**
     * Metodo utilizado para varrer um formulário, encontrar os inputs que estão inválidos e disparar uma exceção informando uma mensagem
     * @param formGroup Formumalario necessario para verificar as validações presentes no mesmo.
     */
    validarFormulario(formGroup: FormGroup) {
        if (formGroup !== undefined && formGroup != null) {
            if (formGroup.invalid) {
                Object.keys(formGroup.controls).forEach(nomeDoControle => {
                    const controle = formGroup.get(nomeDoControle);

                    if (controle.invalid) {

                        const elemento = document.getElementById(nomeDoControle);
                        if (elemento === null) {
                            if (!environment.production) {
                                console.error(MensagemValidacaoEnum.A006.replace('{VALUE}', nomeDoControle), `[${nomeDoControle}]`);
                            }
                            return;
                        }

                        let mensagem = '';
                        elemento.focus();
                        elemento.scrollIntoView({ behavior: 'smooth' });
                        const nomeElemento = elemento.getAttribute('name');

                        if (nomeElemento === null) {
                            if (!environment.production) {
                                console.error(MensagemValidacaoEnum.A008.replace('{VALUE}', nomeDoControle), `[${nomeDoControle}]`);
                            }
                        }

                        if (controle.hasError('required')) {
                            mensagem = MensagemValidacaoEnum.A003.replace('{VALUE}', nomeElemento);

                        } else if (controle.hasError('minlength')) {

                            const minValue = controle.errors.minlength.requiredLength;
                            if (minValue === undefined) {
                                if (!environment.production) {
                                    console.log(MensagemValidacaoEnum.A009, elemento);
                                }
                                throw new Error(MensagemValidacaoEnum.E003);
                            }
                            mensagem = MensagemValidacaoEnum.A005
                                .replace('{VALUE}', nomeElemento)
                                .replace('{MIN_VALUE}', minValue);

                        } else if (controle.hasError('pattern')) {
                            mensagem = MensagemValidacaoEnum.A003.replace('{VALUE}', nomeElemento);

                        } else {
                            if (!environment.production) {
                                console.log(MensagemValidacaoEnum.A010.replace('{VALUE}', JSON.stringify(controle.errors)), elemento);
                            }
                            mensagem = MensagemValidacaoEnum.A007;
                        }

                        throw new Error(mensagem);
                    }
                });
            }
        }
    }

    validarDeclarante(formGroup: FormGroup, nomeControle: string) {
        const controle = formGroup.get(nomeControle);
        if (controle.invalid) {
            throw new Error(MensagemValidacaoEnum.A011);
        }
    }
}
