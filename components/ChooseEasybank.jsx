export default function ChooseEasybank() {
  return (
    <section className="bg-gray-100">
      <div className="container mx-auto px-4 text-center md:text-left">
        <br />
        <h2 className="text-2xl md:text-3xl xl:text-4xl my-5 mx-5 md:my-8 md:m-0">Why choose Easybank?</h2>
        <p className="text-gray-500 text-sm xl:text-lg max-w-lg mx-auto md:mx-0">
          We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-12">
          <div>
            <img className="mx-auto md:mx-0 mb-3 w-20 md:w-16 md:mb-8" src="icon-online.svg" alt="" />
            <div className="p-4 md:p-0">
              <h3 className="text-lg xl:text-2xl mb-2">Online Banking</h3>
              <p className="text-sm xl:text-lg">Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.</p>
            </div>
          </div>
          <div>
            <img className="mx-auto md:mx-0 mb-3 w-20 md:w-16 md:mb-8" src="icon-budgeting.svg" alt="" />
            <div className="p-4 md:p-0">
              <h3 className="text-lg xl:text-2xl mb-2">Simple Budgeting</h3>
              <p className="text-sm xl:text-lg">See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.</p>
            </div>
          </div>
          <div>
            <img className="mx-auto md:mx-0 mb-3 w-20 md:w-16 md:mb-8" src="icon-onboarding.svg" alt="" />
            <div className="p-4 md:p-0">
              <h3 className="text-lg xl:text-2xl mb-2">Fast Onboarding</h3>
              <p className="text-sm xl:text-lg">We don’t do branches. Open your account in minutes online and start taking control of your finances right away.</p>
            </div>
          </div>
          <div>
            <img className="mx-auto md:mx-0 mb-3 w-20 md:w-16 md:mb-8" src="icon-api.svg" alt="" />
            <div className="p-4 md:p-0">
              <h3 className="text-lg xl:text-2xl mb-2">Open API</h3>
              <p className="text-sm xl:text-lg">Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.</p>
            </div>
          </div>
        </div>
      </div>
      <br />
    </section>
  );
}