const CardVertical = () => {
    return (
        <>
            <div className="card-vertical">
                <div className="card-img">
                    <img src="pngwing.com.png" />
                </div>
                <div>
                    <span className="tag">20% off</span>
                    <span className="tag">limitted time</span>
                </div>
                <div className="card-title">
                    <h4>WebBuilder 1</h4>
                </div>
                <div className="card-body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur facilis assumenda deleniti architecto
                    doloribus ut eligendi alias totam dignissimos placeat, hic, incidunt voluptas eum?
                    <div>
                        <span className="price-disc">$23.23</span>
                        <span className="price">$43.34</span>
                        <span className="discount">(20% off)</span>
                    </div>
                </div>
                <button>view more</button>
            </div>
        </>
    );
}

export default CardVertical;