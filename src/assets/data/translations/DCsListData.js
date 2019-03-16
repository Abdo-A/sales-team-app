import { selectedLanguage } from '.';

const DCsListData = {
  DCs: {
    english: 'DCs',
    thai: '',
  },
  largeDCsHeader: {
    english: 'Large DCs',
    thai: '',
  },
  mediumDCsHeader: {
    english: 'Medium DCs',
    thai: '',
  },
  smallDCsHeader: {
    english: 'Small DCs',
    thai: '',
  },
  salesIndication: {
    english: 'sales until now',
    thai: '',
  },
  monthIndication: {
    english: 'This months ends on',
    thai: '',
  },
  totalSalesIndication: {
    english: 'Total sales this month',
    thai: '',
  },
  otherSalesIndication: {
    english: 'Grass jelly sales this month',
    thai: '',
  },
  totalTargetIndication: {
    english: 'Total monthly target',
    thai: '',
  },
  otherTargetIndication: {
    english: 'Grass jelly monthly target',
    thai: '',
  },
  rankIndication: {
    english: 'The rank of your DC',
    thai: '',
  },
};

const appDataKeys = Object.keys(DCsListData);
const appDataValues = Object.values(DCsListData);
export default appDataKeys.reduce((acc, item, i) => {
  acc[item] = appDataValues[i][selectedLanguage];
  return acc;
}, {});
