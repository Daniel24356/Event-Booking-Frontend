const Categories = () => {
    const categories = [
        { name: "Restaurant", count: 12, icon: "🍴" },
        { name: "Shopping", count: 32, icon: "🛍️" },
        { name: "Hotel", count: 14, icon: "🏨" },
        { name: "Museum", count: 9, icon: "🏛️" },
        { name: "GYM", count: 22, icon: "💪" },
        { name: "Music", count: 8, icon: "🎵" },
    ];


    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
                {categories.map((cat) => (
                    <div
                        key={cat.name}
                        className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center hover:shadow-lg transition"
                    >
                        <div className="text-3xl mb-3">{cat.icon}</div>
                        <h3 className="font-semibold text-gray-800">{cat.name}</h3>
                        <p className="text-sm text-gray-500">({cat.count})</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Categories