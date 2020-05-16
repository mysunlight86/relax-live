// eslint-disable-next-line no-unused-vars
class Validator {
  constructor({
    selector,
    method
  }) {
    this.form = document.querySelector(selector);
    this.method = method;
    this.elementForm = this.form.querySelector('input[type="checkbox"]');
    this.error = new Set();
  }

  init() {
    this.applyStyle();
    this.elementForm.addEventListener('change', this.checkIt.bind(this));
    this.form.querySelector('button').addEventListener('click', e => {
      e.preventDefault();
      this.checkIt({
        target: this.elementForm
      });
      if (this.error.size) {
        e.preventDefault();
      }
    });
  }

  isValid(elem) {
    const validatorMethod = {
      notChecked(elem) {
        if (elem.checked) {
          return true;
        } else {
          return false;
        }
      }
    };

    if (this.method) {
      const method = this.method[elem.id];

      if (method) {
        return method.every(item => validatorMethod[item[0]](elem));
      }
    } else {
      console.warn('Необходимо передать id полей ввода и методы проверки этих полей!');
    }

    return true;
  }

  checkIt(event) {
    const target = event.target;

    if (this.isValid(target)) {
      this.showSuccess(target);
      this.error.delete(target);
    } else {
      this.showError(target);
      this.error.add(target);
    }
  }

  showError(elem) {
    elem.classList.remove('success');
    elem.classList.add('error');
    if (elem.nextElementSibling && elem.nextElementSibling.classList.contains('validator-error')) {
      return;
    }
    const errorDiv = document.createElement('div');
    errorDiv.textContent = 'Cогласитесь с политикой конфиденциальности';
    errorDiv.classList.add('validator-error');
    elem.insertAdjacentElement('afterend', errorDiv);
  }

  showSuccess(elem) {
    elem.classList.remove('error');
    elem.classList.add('success');
    if (elem.nextElementSibling && elem.nextElementSibling.classList.contains('validator-error')) {
      elem.parentNode.removeChild(elem.nextElementSibling);
    }
  }

  applyStyle() {
    const style = document.createElement('style');
    style.textContent = `
            input.error {
                border: 2px solid red !important;
            }

            .validator-error {
                font-size: 12px;
                font-family: sans-serif;
                color: red;
                position: absolute;
                z-index: 1;
                top: 35px;
                left: 25px;
            }
        `;

    document.head.appendChild(style);
  }
}

export default Validator;
