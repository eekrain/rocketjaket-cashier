import numbro from 'numbro';

export const myNumberFormat = {
  thousandSeparated(num?: number | null, options?: 'nullAsEmpty') {
    if (!num && options === 'nullAsEmpty') {
      return '';
    } else if (!num) num = 0;
    return numbro(num).format({
      thousandSeparated: true,
    });
  },
  rp(num?: number | null, options?: 'nullAsEmpty') {
    if (!num && options === 'nullAsEmpty') {
      return '';
    } else if (!num) num = 0;
    return numbro(num).format({
      thousandSeparated: true,
      prefix: 'Rp ',
    });
  },
  rpDiscount(num?: number | null, options?: 'nullAsEmpty') {
    if (!num && options === 'nullAsEmpty') {
      return '';
    } else if (!num) num = 0;
    return numbro(num).format({
      thousandSeparated: true,
      prefix: '- Rp ',
    });
  },
  percentageDiscount(num?: number | null, options?: 'nullAsEmpty') {
    if (!num && options === 'nullAsEmpty') {
      return '';
    } else if (!num) num = 0;
    return numbro(num).format({
      thousandSeparated: true,
      prefix: '- ',
      postfix: '%',
    });
  },
  unformat(
    strNum?: string | null,
    defaultValue?: number,
    minimumValue?: number,
  ) {
    const defaultVal = defaultValue ? defaultValue : 0;
    if (typeof strNum === 'string') {
      const temp = numbro.unformat(strNum);
      const temp2 = isNaN(temp) ? defaultVal : temp;
      const temp3 = minimumValue
        ? temp2 < minimumValue
          ? minimumValue
          : temp2
        : temp2;
      return temp3;
    } else return defaultVal;
  },
  phoneNumber: (
    text: string | null | undefined,
    format: 'with+62' | 'with0' | 'withoutFirst' | 'cleanBareNumberOnly',
  ) => {
    if (!text) return '';
    // eslint-disable-next-line no-useless-escape
    const inputnumber = text.trim().replace(/[^0-9\.]+/g, '');
    const first62 = inputnumber.slice(0, 2);
    const first0 = inputnumber.charAt(0);
    let bareNumber = '';
    if (first62 === '62') {
      bareNumber = inputnumber.slice(2);
    } else if (first0 === '0') {
      bareNumber = inputnumber.slice(1);
    } else {
      bareNumber = inputnumber;
    }

    if (format === 'cleanBareNumberOnly') {
      return bareNumber;
    }

    const part1 = bareNumber.slice(0, 3);
    const part2 =
      bareNumber.slice(3, 7).length > 0 ? `-${bareNumber.slice(3, 7)}` : '';
    const part3 =
      bareNumber.slice(7).length > 0 ? `-${bareNumber.slice(7)}` : '';

    if (format === 'with+62') {
      console.log('🚀 ~ file: myNumberFormat.ts ~ line 75 ~ with+62');
      return `+62 ${part1}${part2}${part3}`;
    } else if (format === 'with0') {
      console.log('🚀 ~ file: myNumberFormat.ts ~ line 75 ~ with0');
      return `0${part1}${part2}${part3}`;
    } else if (format === 'withoutFirst') {
      console.log('🚀 ~ file: myNumberFormat.ts ~ line 75 ~ withoutFirst');
      return `${part1}${part2}${part3}`;
    } else {
      console.log('🚀 ~ file: myNumberFormat.ts ~ line 75 ~ else');
      return text;
    }
  },
};

export const myTextFormat = {
  titleCase: (text: string) => {
    return text.replace(/(^|\s)\S/g, function (t) {
      return t.toUpperCase();
    });
  },
};
