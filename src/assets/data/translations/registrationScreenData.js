import { selectedLanguage } from '.';


const registrationScreenData = {
  register: {
    english: 'Register',
    thai: '',
  },
  positionStatement: { // Position is like: sales rep, dc owner, superviser.. etc
    english: 'Choose your position',
    thai: '',
  },
  firstName: {
    english: 'First Name',
    thai: '',
  },
  surname: {
    english: 'Surname',
    thai: '',
  },
  positionPlaceholder: {
    english: 'For example: Sales Rep',
    thai: '',
  },
  DCstatement: {
    english: 'Choose your DC',
    thai: '',
  },
  DCexample: {
    english: 'For example: เพชรบูรณ์',
    thai: '',
  },
  DCsearch: {
    english: 'Search DCs...',
    thai: '',
  },
  registrationSuccessHint: {
    english: 'Registration Successful, you can login',
    thai: '',
  },
  yourPasswordIs: {
    english: 'Your password is',
    thai: '',
  },
  youCanLogin: {
    english: 'You can now login at any time',
    thai: '',
  },
  thankYou: {
    english: 'Thank you',
    thai: '',
  },
};


const appDataKeys = Object.keys(registrationScreenData);
const appDataValues = Object.values(registrationScreenData);
export default appDataKeys.reduce((acc, item, i) => { acc[item] = appDataValues[i][selectedLanguage]; return acc; }, {});
