

const Banner = () => {
    return (
        <div className="container mx-auto mt-10 mb-12">
            <div className="flex">
                <div>
                    <h1 className="text-3xl font-medium">Design and Build Your Unique
                        Mini Ecosystem</h1>
                    <p className="text-lg text-[#4D4D4D] md:w-4/12 mt-2">Learn the art of combining plants, soil, and
                        decorative elements to craft a thriving,
                        self-sustaining ecosystem.</p>
                    <div className="flex mt-8">
                        <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                            <div className="avatar">
                                <div className="w-12">
                                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-12">
                                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-12">
                                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                </div>
                            </div>
                            <div className="avatar placeholder">
                                <div className="bg-neutral text-neutral-content w-12">
                                    <span>+10</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center -ml-4">
                            <img className="w-[100px] mt-9" src="https://i.ibb.co.com/qpwxhgh/Vector-2.png" alt="" />
                            <p className="text-lg text-[#23A204] font-medium">Join Our Community to know more
                                We are waiting for you!</p>
                        </div>
                    </div>
                </div>
                <div class=" md:w-6/12 bg-[#E8FFDE] h-[450px] rounded-2xl relative">
                    <div>
                        <img className="w-[233px] h-[448px]" src="https://i.ibb.co.com/9HHtzCn/tree-1.png" alt="" />
                    </div>
                    <div class="bg-white shadow-lg border absolute bottom-8 right-14 w-3/6 p-4 rounded-2xl">
                        <div class="relative">
                            <h1 class="text-xl font-medium w-4/6">Elegant Indoor Bird of
                                Paradise Plant</h1>
                            <p class="w-4/6">The Bird of Paradise plant is a
                                stunning addition to any indoor
                                space, known for its large, lush
                                green leaves and exotic appeal</p>

                        </div>
                        <div class="absolute bottom-7 right-0">
                            <img class="w-[211px] h-[333px]" src="https://i.ibb.co.com/3zWSw7p/tree-1.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;