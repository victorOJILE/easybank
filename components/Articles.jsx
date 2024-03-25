export default function Articles() {
  const articles = [
    {
      author: "Claire Robinson",
      url: "#",
      title: "Receive money in any currency with no fees",
      description: "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single",
      photoUrl: "image-currency.jpg",
      photoAlt: ""
    },
    {
      author: "Wilson Hutton",
      url: "#",
      title: "Treat yourself without worrying about money",
      description: "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you",
      photoUrl: "image-restaurant.jpg",
      photoAlt: ""
    },
    {
      author: "Wilson Hutton",
      url: "#",
      title: "Take your Easybank card wherever you go",
      description: "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you",
      photoUrl: "image-plane.jpg",
      photoAlt: ""
    },
    {
      author: "Claire Robinson",
      url: "#",
      title: "Our invite-only Beta accounts are now live!",
      description: "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site",
      photoUrl: "image-confetti.jpg",
      photoAlt: ""
    }
  ];

  return (
    <section>
      <div className="container mx-auto p-6" id="articles">
        <h2 className="text-2xl md:text-3xl xl:text-4xl mb-5 md:my-8 text-center md:text-left">Latest Articles</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-8">
          {
            articles.map((article, index) => (
              <div key={index} className="rounded-md shadow-sm md:shadow-lg overflow-auto">
                <div className="overflow-hidden">
                  <img className="w-full" src={article.photoUrl} alt={article.photoAlt} />
                </div>
                <div className="p-4 relative">
                  <small className="text-gray-400 text-xs md:text-sm">By {" "}{article.author}</small>
                  <h3 className="text-base xl:text-xl mb-2 sm:mt-1">
                    <a href="#">{article.title}</a>
                  </h3>
                  <p className=" text-xs md:text-sm line-clamp-3 lg:line-clamp-4 leading-relaxed mb-3">{article.description}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
    </section>
  );
}