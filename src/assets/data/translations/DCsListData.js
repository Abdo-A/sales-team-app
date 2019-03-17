import { selectedLanguage } from '.';

const DCsListData = {
  DCs: {
    english: 'DCs',
    thai: 'ศูนย์กระจายสินค้า',
  },
  largeDCsHeader: {
    english: 'Large DCs',
    thai: 'ศูนย์ไซส์ L',
  },
  mediumDCsHeader: {
    english: 'Medium DCs',
    thai: 'ศูนย์ไซส์ M',
  },
  smallDCsHeader: {
    english: 'Small DCs',
    thai: 'ศูนย์ไซส์ S',
  },
  salesIndication: {
    english: 'sales until now',
    thai: 'ยอดขายจนถึงปัจจุบัน',
  },
  monthIndication: {
    english: 'This months ends on:',
    thai: 'จบเดือน :',
  },
  totalSalesIndication: {
    english: 'Total sales this month',
    thai: 'ยอดขายเฉาก๊วยของเดือนนี้',
  },
  otherSalesIndication: {
    english: 'Grass jelly sales this month',
    thai: 'ขายเฉาก๊วยประจำเดือน',
  },
  totalTargetIndication: {
    english: 'Total monthly target',
    thai: 'เป้ารวมโยเกิร์ตเล็กและเฉาก๊วยประจำเดือน',
  },
  otherTargetIndication: {
    english: 'Grass jelly monthly target',
    thai: 'เป้าเฉาก๊วยประจำเดือน',
  },
  rankIndication: {
    english: 'The rank of your DC',
    thai: 'ลำดับของศูนย์คุณ',
  },
};

const appDataKeys = Object.keys(DCsListData);
const appDataValues = Object.values(DCsListData);
export default appDataKeys.reduce((acc, item, i) => {
  acc[item] = appDataValues[i][selectedLanguage];
  return acc;
}, {});
