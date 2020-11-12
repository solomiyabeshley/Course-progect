let photoFile;
let wasSubmited;
const form = document.forms.authForm;

const validators = {
    firstName: (value) => {
        const regex_1 = /^[A-Z][a-z]*'?[a-z]+((-| )[A-Za-z]+'?[a-z]+){0,2}$/;
        const regex_2 = /^[A-Z][a-z]*'?[a-z]+([A-Za-z]+'?[a-z]+){2}$/;
        const regex_3 = /^[A-Z][a-z]*'?[a-z]+([A-Za-z]+'?[a-z]+){2}$/;
        return (
            (regex_1.test(value.trim())) &&
            !regex_2.test(value.trim()) &&
            !regex_3.test(value.trim())
        );
    },
    lastName: (value) => {
        const regex_01 = /^[A-Z][a-z]*'?[a-z]+((-| )[A-Za-z]+'?[a-z]+){0,2}$/;
        const regex_02 = /^[A-Z][a-z]*'?[a-z]+([A-Za-z]+'?[a-z]+){2}$/;
        const regex_03 = /^[A-Z][a-z]*'?[a-z]+([A-Za-z]+'?[a-z]+){2}$/;
        return (
            (regex_01.test(value.trim())) &&
            !regex_02.test(value.trim()) &&
            !regex_03.test(value.trim())
        );
    },
    email: (value) => {
        const regex = /^[A-Za-z](?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]*(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?){0,5}\.[A-Za-z0-9]{2,5}$/;
        return regex.test(value.trim());
    },

    password: (value) => {
        const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/;
        return regex.test(value.trim());
    },
    confirmPassword: (value, confirmValue) => {
        return value === confirmValue;
    },
};

const validateForm = () => {
    let valid = true;
    const controls = [...form.elements].reduce((acc, el) => {
        if (el.name) {
            if (el.name === 'photo') {
                acc[el.name] = photoFile || null;
                return acc;
            }

            if (el.name === 'confirmPassword') {
                if (wasSubmited) {
                    if (!validators[el.name](el.value, form.password.value)) {
                        el.classList.add('is-invalid');
                        valid = false;
                    } else {
                        el.classList.remove('is-invalid');
                    }
                }

                return acc;
            }

            if (wasSubmited) {
                if (validators[el.name] && !validators[el.name](el.value)) {
                    el.classList.add('is-invalid');
                    valid = false;
                } else {
                    el.classList.remove('is-invalid');
                }
            }
        }

        return acc;
    }, {});
};

const onFormSubmit = (event) => {
    event.preventDefault();
    wasSubmited = true;

    const controls = validateForm();

    console.log(controls);
};
