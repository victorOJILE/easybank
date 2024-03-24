export default function Articles() {
  return (
    <section>
      <div className="container mx-auto max-w-5xl p-6 lg:p-0" id="articles">
        <h2 className="text-2xl leading-relaxed mb-5 md:my-8 text-center md:text-left md:text-3xl"><strong>Latest Articles</strong></h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-8">
          <div className="rounded-md shadow-sm md:shadow-lg overflow-auto">
            <div className="overflow-hidden">
              <img className="w-full" src="image-currency.jpg" alt="" />
            </div>
            <div className="p-4 text-xs relative">
              <small className="text-gray-40">By Claire Robinson</small>
              <h3 className="text-base leading-normal mb-2 sm:mt-1">
                <a href="#">Receive money in any currency with no fees</a>
              </h3>
              <p className="line-clamp-3 lg:line-clamp-4 leading-relaxed mb-3">
                The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single
              </p>
            </div>
          </div>
          <div className="rounded-md shadow-sm md:shadow-lg overflow-auto">
            <div className="overflow-hidden">
              <img className="w-full" src="image-restaurant.jpg" alt="" />
            </div>
            <div className="p-4 text-xs relative">
              <small className="text-gray-400">By Wilson Hutton</small>
              <h3 className="text-base leading-normal mb-2 sm:mt-1">
                <a href="#">
                  Treat yourself without worrying about money
                </a>
              </h3>
              <p className="line-clamp-3 lg:line-clamp-4 leading-relaxed">Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you</p>
            </div>
          </div>
          <div className="rounded-md shadow-sm md:shadow-lg overflow-auto">
            <div className="overflow-hidden">
              <img className="w-full" src="image-plane.jpg" alt="" />
            </div>
            <div className="p-4 text-xs relative">
              <small className="text-gray-400">By Wilson Hutton</small>
              <h3 className="text-base leading-normal mb-2 sm:mt-1">
                <a href="#">
                  Take your Easybank card wherever you go
                </a>
              </h3>
              <p className="line-clamp-3 lg:line-clamp-4 leading-relaxed">We want you to enjoy your travels. This is why we don’t charge any fees on purchases
                while you’re abroad. We’ll even show you</p>
            </div>
          </div>
          <div className="rounded-md shadow-sm md:shadow-lg overflow-auto">
            <div className="overflow-hidden">
              <img className="w-full" src="image-confetti.jpg" alt="" />
            </div>
            <div className="p-4 text-xs relative">
              <small className="text-gray-400">By Claire Robinson</small>
              <h3 className="text-base leading-normal mb-2 sm:mt-1">
                <a href="#">
                  Our invite-only Beta accounts are now live!
                </a>
              </h3>
              <p className="line-clamp-3 lg:line-clamp-4 leading-relaxed">After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site</p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
    </section>
  );
}