const FormatUtil = {
    isEmpty(value) {
        if(value.trim() == ''){
            return true
        } 
        return false
    },
    formatTelefone(v) {
        v = '' + v;
        v = v.replace(/\D/g, "");//Remove tudo o que não é dígito
        if (v.length <= 9) {
            v = v.replace(/(\d)(\d{4})$/, "$1-$2");//Coloca hífen entre o quarto e o quinto dígitos
        } else if (v.length <= 11) {
            v = v.replace(/^(\d{2})(\d)/g, "($1) $2");//Coloca parênteses em volta dos dois primeiros dígitos
            v = v.replace(/(\d)(\d{4})$/, "$1-$2");//Coloca hífen entre o quarto e o quinto dígitos
        } else {
            v = v.replace(/^(\d{2})(\d{2})/g, "$1 ($2) ");//Coloca parênteses em volta do segundo par de dígitos
            v = v.replace(/(\d)(\d{4})$/, "$1-$2");//Coloca hífen entre o quarto e o quinto dígitos
        }
        return v;
    }
}

export default FormatUtil;