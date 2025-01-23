

const Category = ({ category }) => {
    const { id, title, img } = category;
    return (
        <div class="bg-[#E8FFDE] flex justify-between items-center pr-8 h-[116px] rounded-2xl w-[300px]">
            <img className="w-[114px] mb-14" src={img} alt="" />
            <div>
                <h2 class="text-lg font-medium">{title}</h2>
                <button class="bg-[#23A204] px-2 py-1 rounded mt-2 text-white">Shop Now</button>
            </div>
        </div>
    );
};

export default Category;