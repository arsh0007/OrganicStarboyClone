import React from "react";

const FAQContent = () => {
  const FaqQuestion = [
    {
      qus: "Will I get a tracking number for my shipment?",
      ans: "Yes! You will receive a confirmation email with a tracking number about 1-4* business days after your order is placed. Make sure you also check your SPAM folder just in case our email gets stuck there.",
    },
    {
      qus: "When will my purchase be shipped?",
      ans: "Items that are in stock and readily made will usually be shipped from us within 1-4* business days.",
    },
    {
      qus: "Do you ship worldwide?",
      ans: "We ship to all of America, Europe and some places in Asia.",
    },
    {
      qus: "How long will my order take to arrive?",
      ans: "Depending on your location, shipping within the US will take anywhere from 6-12 business days after it has been shipped out. International orders usually get delivered within 6-14 business days after they have been shipped from us, however this varies from country to country based on your respective customs dept. (Some international orders to remote areas may take up to 20-30 business days)",
    },
    {
      qus: "How do I know what size to order?",
      ans: "We have a size chart on the last slide of all our t-shirts, joggers, and hoodies. We recommend getting your normal size or sizing down on most of our clothes. Other than that, our clothes are usually a little bigger in size than normal.",
    },
    {
      qus: "Can I cancel or make changes to my order after it is placed?",
      ans: "If you ordered the wrong item or put the wrong address, please send us an email about this change no later than 1 hour after you placed the order.",
    },
    {
      qus: "What is our return policy?",
      ans: "We only accept refunds for cases in which the item arrives damaged or if you have received the wrong item*. If this is the case, please email us at organicstarboy@gmail.com and we will do our best to make the refund process as simple as possible. IMPORTANT: Make sure you get the right size when ordering, as we usually cannot take returns if you bought the wrong size. Final sale items cannot be returned. (Check our Terms of service for specific return/refund details)",
    },
  ];

  return (
    <div className="font-oswald w-full max-w-4xl mx-auto pt-5 px-4">
      <h1 className="text-4xl md:text-6xl font-semibold text-center">F.A.Q</h1>
      <div className="pt-10 pb-10">
        {FaqQuestion.map((item, index) => (
          <div key={index} className="border-b border-gray-300 pb-6">
            <p className="font-bold text-lg md:text-xl pt-6">{item.qus}</p>
            <p className="pt-3 text-base md:text-lg">{item.ans}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQContent;
