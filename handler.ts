const calculate = (event, context, cb) => {
  const body = JSON.parse(event.body);
  const salary = body.salary;

  let percentage = salary < 1500? 0.01 : 0.02;

  cb(null, {
    statusCode: 200,
    body: JSON.stringify({
      deduction: salary * percentage
    }),
  });
}

export { calculate }
