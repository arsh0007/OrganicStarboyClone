import React from 'react'

const RefundPolicyContent = () => {
  const FaqQuestion = [
    {
      qus: "Returns",
      ans: "We do not offer returns after a purchase. If the product is damaged or faulty you will be refunded.",
    },
    {
      qus: "Damages and issues",
      ans: "Please inspect your order upon reception and contact us immediately if the item is defective, damaged or if you receive the wrong item, so that we can evaluate the issue and make it right.",
    },
    {
      qus: "Exchanges",
      ans: "Exchanges are not approved unless the product ordered is damaged/ faulty.",
    },
    {
      qus: "European Union 14 day cooling off period",
      ans: "Notwithstanding the above, if the merchandise is being shipped into the European Union, you have the right to cancel or return your order within 14 days, for any reason and without a justification. As above, your item must be in the same condition that you received it, unworn or unused, with tags, and in its original packaging. You’ll also need the receipt or proof of purchase.",
    },
    {
      qus: "Refunds",
      ans: "We will notify you once we’ve received and inspected your return, and let you know if the refund was approved or not. If approved, you’ll be automatically refunded on your original payment method within 10 business days. Please remember it can take some time for your bank or credit card company to process and post the refund too. If more than 15 business days have passed since we’ve approved your return, please contact us at organicstarboy@gmail.com",
    },
  ];

  return (
    <div className="font-oswald wid40 m-auto pt-5">
      <h1 className="text-5xl text-center font-semibold">Refund policy</h1>
      <div className="pt-10 pb-10">
        {FaqQuestion.map((qus, ans) => (
          <div className="Avenir">
            <p className="font-bold pt-6">{qus.qus}</p>
            <p className="pt-6">{qus.ans}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RefundPolicyContent
