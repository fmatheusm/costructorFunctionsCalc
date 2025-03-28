function Calculadora() {

    this.display = document.querySelector('.display');

    this.inicia = () => {
        this.clickBotoes();
        this.pressionaEnter();
    }

    this.pressionaEnter = () => {
        this.display.addEventListener('keyup', e => {
            if (e.keyCode === 13) {
                this.realizaConta();
            }
        })
    }

    this.btnParaDisplay = (valor) => this.display.value += valor;

    this.clear = () => this.display.value = '';

    this.del = () => this.display.value = this.display.value.slice(0, -1);

    this.realizaConta = () => {
        let conta = this.display.value;

        try {
            conta = eval(conta);
            if (!conta && conta !== 0) {
                alert('Conta Invalida');
                return;
            }

            this.display.value = conta;
        } catch (e) {
            alert('Conta Invalida');
            return;
        }
    }

    this.clickBotoes = () => {
        document.addEventListener('click', e => {
            const el = e.target;

            if (el.classList.contains('btn-num')) {
                this.btnParaDisplay(el.innerText);
            }

            if (el.classList.contains('btn-clear')) {
                this.clear();
            }

            if (el.classList.contains('btn-del')) {
                this.del();
            }

            if (el.classList.contains('btn-eq')) {
                this.realizaConta();
            }
        });
    }
}

const calculadora = new Calculadora();
calculadora.inicia();