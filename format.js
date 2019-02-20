const numberFormat = (str) => {
    const r = parseInt(str.replace(/[^\d]+/gi, ''), 10);
  
    return r ? r.toLocaleString('en') : '';
  };

  console.log(numberFormat('222333'));
 //222,333


 const negNumberFormat = (str) => {
    const clean = str.replace(/[^\d-]+/gi, '');
    if (clean === '-') return '-';
    const r = parseInt(clean, 10);
  
    return r ? r.toLocaleString('en') : '';
  };

  console.log(negNumberFormat("-2323313123123213"))
 // -2,323,313,123,123,213