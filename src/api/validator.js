const DELIVERY_CUSTOMER_TYPE = Object.freeze({
    SENDER: 'Sender',
    RECIPIENT: 'Receiver'
})

const DILIVERY_METHOD = Object.freeze({
    AIRPORT: 'Airport',
    DOOR: 'Door'
})

const SERVICE_TYPE =Object.freeze({
    SENDER_SERVICE: 'SenderService',
    RECEIVER_SERVICE: 'ReceiverService'
})

const DELIVERY_TYPE = Object.freeze({
    LAND_DELIVERY: 'LandDelivery',
    AIR_DELIVERY: 'AirDelivery'
})

const LANGUAGE_PATH = 'courierDetails.validation.'


// regex 
const NAME = /^(?!\s)(?!-)[a-zA-Z-\s]*[a-zA-Z](?!-)$/;
const USERNAME = /[a-zA-Z0-9]/;
const EMAIL = /\S+@\S+\.\S+/;
const PASSWORD = /^(?=.*\d)(?=.*[a-z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,15}$/

const isEmpty = (str) => {
    if (str == null || str.trim().length == 0) {
        return true;
    }
    return false;
}

const validName = (name = "") => {
    return NAME.test(name);
}
const validUserName = (name = "") => {
    return USERNAME.test(name);
}

const validEmail = (email = "") => {
    return EMAIL.test(email);
}

const validPassword = (password = "") => {
    return PASSWORD.test(password);
}





const validateNames = (traveler) => {
    let nameErrorsMap = new Map();
        let name = traveler.name;
        let notValid = notAValidName(name);
        if (notValid) {
            nameErrorsMap.set('name', notValid);
        }
    return nameErrorsMap;
}
const validateLogin = (traveler) => {
    let nameErrorsMap = new Map();
      
    return nameErrorsMap;
}
const notAValidName = (name) => {
    if (isEmpty(name)) {
        return 'emptyName';
    }
    return validName(name) ? '' : 'invalidName';
}
const userNameValid = (userName) => {
    if (isEmpty(userName)) {
        return 'User Name';
    }
    return validUserName(userName) ? '' : 'invalidUserName';
}

const validateEmail = (email) => {
    if (isEmpty(email)) {
        return 'enterEMail';
    }
    return validEmail(email) ? '' : 'invalidEMail';
}

const validateNotPassword = (password) => {
    if (isEmpty(password)) {
        return 'enter Password';
    }
    return validPassword(password) ? '' : 'min 6 characters which contain at least one numeric digit and a special character';
}
const LogInvalidateEmail = (email) => {
    
    return isEmpty(email) ? 'Please enter email' : '';
}

const LogInvalidateNotPassword = (password) => {
    if (isEmpty(password)) {
        return 'enter Password';
    }
    return isEmpty(password) ? 'Please enter Password' : '';
}

const commonValidation = (traveler) => {
    let errorMap = validateNames(traveler);
    let emailNotValid = validateEmail(traveler.email);
    let nameNotValid = notAValidName(traveler.name);
    let userNameNotValid = userNameValid(traveler.username)
    let validatePassword = validateNotPassword(traveler.password)
    // 
    if(nameNotValid) errorMap.set('name',nameNotValid)
    if(userNameNotValid) errorMap.set('username',userNameNotValid)
    if(emailNotValid) errorMap.set('email', emailNotValid);
    if(validatePassword) errorMap.set('password', validatePassword);

    return errorMap;
}
const loginValidation = (login)=>{
    let errorMap = validateLogin(login);
    let LogInEmail = LogInvalidateEmail(login.usernameOrEmail);
    let LogInPassword = LogInvalidateNotPassword(login.password);
    // 
    if(LogInEmail) errorMap.set('usernameOrEmail',LogInEmail)
    if(LogInPassword) errorMap.set('password',LogInPassword)
    return errorMap;
}
const validate = {
    sender: (sender) => {
        let errorMap = commonValidation(sender);
    
        return errorMap;
    },
    login:(user) =>{
        let errorMap = loginValidation(user);
        return errorMap
    }
}

const validator = {
    validateCourier: (data, type) => {
        switch (type) {
            case 'SIGNUP':
                return validate.sender(data);
            case 'LOGIN':
                return validate.login(data);
            default:
                return new Map();
        }
    }
}

export { validator as default, 
    isEmpty,
    DELIVERY_CUSTOMER_TYPE,
    DILIVERY_METHOD,
    SERVICE_TYPE,
    DELIVERY_TYPE
};