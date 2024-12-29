function Offers() {
  const offers = [
      { id: 1, title: 'Flat 20% Off', description: 'Use code SAVE20 to get 20% off on your next ride!', banner: '/static/firstOffer.png' },
      { id: 2, title: '₹100 Cashback', description: 'Get ₹100 cashback on bookings over ₹500.', banner: '/static/secondOffer.png' },
      { id: 3, title: 'Refer & Earn', description: 'Earn ₹50 for each successful referral.', banner: '/static/thirdOffer.png' },
      { id: 4, title: 'Special Weekend Offer', description: 'Up to ₹200 off on Christmas bookings!', banner: '/static/fourthOffer.png' },
  ];

  return (
      <div className="p-6 bg-gray-100">
          <h2 className="text-2xl font-bold mb-6 text-rose-800">Offers:</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {offers.map((offer) => (
                  <div
                      key={offer.id}
                      className="relative bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden hover:shadow-2xl hover:scale-105 hover:border-red-400 transition-all duration-300 ease-in-out"
                  >
                      <img
                          src={offer.banner}
                          alt={offer.title}
                          className="h-32 w-full object-cover"
                      />
                      <div className="p-4">
                          <h3 className="text-lg font-semibold text-gray-800">{offer.title}</h3>
                          <p className="text-sm text-gray-600 mt-2">{offer.description}</p>
                      </div>
                      <div className="absolute bottom-0 right-0 bg-red-500 text-white px-3 py-1 text-xs font-bold rounded-tl-lg">
                          Limited Time!
                      </div>
                  </div>
              ))}
          </div>
      </div>
  );
}

export default Offers;
