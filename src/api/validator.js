import store from '../store';

const PASSENGER_TYPE = Object.freeze({
    ADULT: 'Adult',
    CHILD: 'Child',
    INFANT: 'Infant'
})

const PASSENGER_CODE = Object.freeze({
    ADULT: 'ADT',
    CHILD: 'CHD',
    INFANT: 'INF'
})

const SERVICE_TYPE = Object.freeze({
    BAGGAGE: 'baggages',
    MEAL: 'meals',
    SEATS: 'seats'
})

const ASSISTANCE_TYPE = Object.freeze({
    BLIND: 'BLND',
    DEAF: 'DEAF',
    WHEELCHAIR: 'WHC'
})

const DOCUMENT_TYPE = Object.freeze({
    PASSPORT: 'Passport',
    IDENTITTYCARD: 'IdenticationCard'
})

const LANGUAGE_PATH = 'passengers.validation.'

// regex 
const NAME = /^(?!\s)(?!-)[a-zA-Z-\s]*[a-zA-Z](?!-)$/;

const EMAIL = /\S+@\S+\.\S+/;

const DATE_FORMAT = /^(0[1-9]|1[012])[/](0[1-9]|[12][0-9]|3[01])[/][0-9]{4}$/;

const DATE_FORMAT_SIMPLE = /^[0-9]{2}[/][0-9]{2}[/][0-9]{4}/;

const MEMBERSHIP_NUMBER = /^[0-9]{9}$/;

const DOCUMENT_IC = /^[a-zA-Z 0-9]+$/;

const DOCUMENT_PT = /^[a-z0-9]+$/i;

const NOMADCORPRATE  = /^\d{9}$/

const YEARS_BEFORE = (years) => {
    let date = new Date(store.state.searchCriteria.departureDateTime);
    date.setFullYear(date.getFullYear() - years);
    return date;
}

const YEARS_INFANT_BEFORE = (years) => {
    let date = new Date(store.state.searchCriteria.returnDateTime);
    date.setFullYear(date.getFullYear() - years);
    return date;
}


const GET_DOB_UPPER_LIMITS = () => {
    let childUpperLimit = 12;
    let infantUpperLimit = 2;
    return {
        Infant: YEARS_INFANT_BEFORE(infantUpperLimit),
        Child: YEARS_BEFORE(childUpperLimit),
        ChildCallCenterBookable: YEARS_BEFORE(14)
    }
}

const isEmpty = (str) => {
    if (str == null || str.trim().length == 0) {
        return true;
    }
    return false;
}

const validName = (name = "") => {
    return NAME.test(name);
}

const validEmail = (email = "") => {
    return EMAIL.test(email);
}

const validateDOB = (dob, type) => {
    const DOB_UPPER_LIMITS = GET_DOB_UPPER_LIMITS();
    // console.log(`Now: ${new Date().getTime()} Date: ${dob.getTime()} Child: ${DOB_UPPER_LIMITS.child.getTime()} Infant: ${DOB_UPPER_LIMITS.infant.getTime()}`)
    switch (type) {
        case PASSENGER_TYPE.ADULT:
            if (dob.getTime() > DOB_UPPER_LIMITS.Child.getTime()) {
                return LANGUAGE_PATH + 'exceed12';
            }
            break;
        case PASSENGER_TYPE.CHILD:
            if (dob.getTime() < DOB_UPPER_LIMITS.Child.getTime() && dob.getTime() > DOB_UPPER_LIMITS.ChildCallCenterBookable.getTime()) {
                return LANGUAGE_PATH + "callCenterBookable";
            } else if (dob.getTime() > DOB_UPPER_LIMITS.Infant.getTime() || dob.getTime() < DOB_UPPER_LIMITS.Child.getTime()) {
                return LANGUAGE_PATH + 'notExceed12';
            }
            break;
        case PASSENGER_TYPE.INFANT:
            if (dob.getTime() > new Date().getTime() || dob.getTime() < DOB_UPPER_LIMITS.Infant.getTime()) {
                return LANGUAGE_PATH + 'notExceed2';
            }
            break;
        default:
            break;
    }
    return false;
}

const notAValidMembership = (traveler) => {
    if (traveler.hasLoyalty) {
        // check for empty
        // check for 9 digits
    }
    return false;
}

// should actually be ISO ***
const notAValidDOB = (dobISOString, type) => {
    if (isEmpty(dobISOString)) {
        return LANGUAGE_PATH + 'enterDOB';
    }
    if (!DATE_FORMAT_SIMPLE.test(dobISOString)) return LANGUAGE_PATH + 'wrongFormatDOB';

    if (!DATE_FORMAT.test(dobISOString)) return LANGUAGE_PATH + 'invalidDOB';

    let dateObj = new Date(dobISOString);

    return validateDOB(dateObj, type);
}

const notAValidName = (name, type) => {
    if (isEmpty(name)) {
        return LANGUAGE_PATH + type;
    }
    if (!validName(name)) {
        return LANGUAGE_PATH + `invalid${type}`
    };
    return false;
}

// [name-filed : error msg / language key]
const COMMON_NAME_TYPES = new Set(['firstName', 'lastName'])

const validateNames = (traveler) => {
    let nameErrorsMap = new Map();
    for (let nameType of COMMON_NAME_TYPES.values()) {
        let name = traveler[nameType];
        let notValid = notAValidName(name, nameType);
        if (notValid) {
            nameErrorsMap.set(nameType, notValid);
        }
    }
    return nameErrorsMap;
}

const validateDocument = (documentObj) => {
    if(isEmpty(documentObj.number)) {
        return LANGUAGE_PATH + 'enterDocNumber';
    } else {
        
            if (!DOCUMENT_IC.test(documentObj.number)) {
                return LANGUAGE_PATH + 'invalidID';
            }
        // if (documentObj.type == DOCUMENT_TYPE.PASSPORT) {
        //     if (!DOCUMENT_PT.test(documentObj.number)) {
        //         return LANGUAGE_PATH + 'invalidPSPT';
        //     }
        // }
    }
    return false;
}

const commonValidation = (traveler) => {
    let errorMap = validateNames(traveler);
    let nationalityNotSelected = isEmpty(traveler.document.nationalityCode);
    if (nationalityNotSelected) {
        errorMap.set('nationality', LANGUAGE_PATH + 'selectNationality');
    }
    return errorMap;
}

const validate = {
    adult: (adult) => {
        let errorMap = commonValidation(adult);
        let documentNotValid = validateDocument(adult.document);
        if (documentNotValid) {
            errorMap.set('document', documentNotValid);
        }
        let dobNotValid = notAValidDOB(adult.dateOfBirth, PASSENGER_TYPE.ADULT);
        if (dobNotValid) {
            errorMap.set('dob', dobNotValid);
        }
        let genderNotSelected = isEmpty(adult.gender);
        if (genderNotSelected) {
            errorMap.set('gender', LANGUAGE_PATH + 'selectGender');
        }
        return errorMap;
    },
    child: (child) => {
        let errorMap = commonValidation(child);
        let dobNotValid = notAValidDOB(child.dateOfBirth, PASSENGER_TYPE.CHILD);
        let documentNotValid = validateDocument(child.document);
        if (dobNotValid) {
            errorMap.set('dob', dobNotValid);
        }
        if (documentNotValid) {
            errorMap.set('document', documentNotValid);
        }
        let genderNotSelected = isEmpty(child.gender);
        if (genderNotSelected) {
            errorMap.set('gender', LANGUAGE_PATH + 'selectGender');
        }
        return errorMap;
    },
    infant: (infant) => {
        let errorMap = commonValidation(infant);
        let dobNotValid = notAValidDOB(infant.dateOfBirth, PASSENGER_TYPE.INFANT);
        if (dobNotValid) {
            errorMap.set('dob', dobNotValid);
        }
        return errorMap;
    }
}

const validator = {
    validatePassenger: (passenger, type) => {
        switch (type) {
            case PASSENGER_TYPE.ADULT:
                return validate.adult(passenger);
            case PASSENGER_TYPE.CHILD:
                return validate.child(passenger)
            case PASSENGER_TYPE.INFANT:
                return validate.infant(passenger);
            default:
                return new Map();
        }
    },
    email: (email) => {
        if (isEmpty(email)) {
            return LANGUAGE_PATH + 'enterEMail';
        }
        return validEmail(email) ? '' : LANGUAGE_PATH + 'invalidEMail';
    },
    nomadCorporate: (numberText) => {
        if (isEmpty(numberText)) {
            return LANGUAGE_PATH + 'enterNomadCop';
        }
        else {
            let nomadDigitsTest = NOMADCORPRATE.test(numberText)
            if (!nomadDigitsTest) {
                return LANGUAGE_PATH + 'invalidNomadCop';
            }
        }
        return false;
    },
    loyaltyCard: (cardNumber) => {
        if (isEmpty(cardNumber)) {
            return LANGUAGE_PATH + 'membershipNumber';
        } else {
            let isNumberValid = MEMBERSHIP_NUMBER.test(cardNumber);
            if (!isNumberValid) {
                return LANGUAGE_PATH + 'invalidMembership';
            }
        }
        return false;
    }
}

export { validator as default, 
    isEmpty, 
    PASSENGER_TYPE,
    ASSISTANCE_TYPE, 
    PASSENGER_CODE, 
    LANGUAGE_PATH, 
    SERVICE_TYPE, 
    DOCUMENT_TYPE,
    GET_DOB_UPPER_LIMITS 
};