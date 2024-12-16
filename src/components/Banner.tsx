import { Carousel } from 'antd'

const Banner = () => {
    const banners = [
        'https://rare-gallery.com/uploads/posts/501131-star-wars-4k.jpg',
        'https://wallpapers.com/images/hd/poster-background-duf5mprr7kla128s.jpg',
        'https://moviegalleri.net/wp-content/uploads/2023/06/Thalapathy-Vijay-LEO-Movie-First-Look-Poster-HD.jpg',
    ]
    return (
        <Carousel arrows infinite={false} autoplay>
            {banners.map((item, index) => (
                <div key={index} className="h-[450px]">
                    <img src={item} alt="banner" />
                </div>
            ))}
        </Carousel>
    )
}

export default Banner
