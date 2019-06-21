export const search = query =>
  new Promise((resolve, reject) => {
    const regex = new RegExp(`^${query}`, "i");
    const results = data.filter(dataObject => {
      return (
        regex.test(dataObject.ifsc) ||
        regex.test(dataObject.bank_id) ||
        regex.test(dataObject.bank_name)
      );
    });
    resolve(results);
  });

