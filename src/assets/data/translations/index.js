export const selectedLanguage = 'english';

const appData = {
  appTitle: {
    english: 'Sales System',
    thai: 'ยอดขาย',
  },
};


const appDataKeys = Object.keys(appData);
const appDataValues = Object.values(appData);
export default appDataKeys.reduce((acc, item, i) => { acc[item] = appDataValues[i][selectedLanguage]; return acc; }, {});
