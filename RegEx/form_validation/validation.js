let reg = /[a-z]/gi;

// let reg2 = new RegExp(/[a-zA-Z]/, 'i'); //another way to create regex

const patterns = {
    telephone: /^\d{11}$/,
    username: /^[a-z\d]{5,12}$/i,
    password: /^[\w@_]{8,20}$/,
    slug: /^[a-z\d-]{8,20}$/,
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
};

const inputs = document.querySelectorAll("input");

function validate(field, regex) {
    if(regex.test(field.value)) {
        field.className = 'valid';
    } else {
        field.className = 'invalid';
    }
    // console.log(regex.test(field.value));
}

inputs.forEach((input) => {
    input.addEventListener('keyup', (e) => {
        // console.log(typeof(e));
        validate(e.target, patterns[e.target.name]);
    });
});